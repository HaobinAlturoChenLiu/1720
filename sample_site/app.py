from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    
    f = open("count.txt", "r")
    count = str(f.read())
    f.close()

    f = open("count.txt", "w")
    f.close()

    return render_template("index.html", count=count)

@app.route('/home')
def home():
    return render_template("index.html")

@app.route('/result',methods=['POST', 'GET'])
def result():
    output = request.form.to_dict()
    print(output)
    name = output["name"]
    
    f = open("count.txt", "r")
    count = str(f.read())
    f.close()

    f = open("count.txt", "w")
    f.write(str(name + " " + count))
    f.close()
    
    return render_template('index.html', name = name)

if __name__ == "__main__":
    app.run()
    

