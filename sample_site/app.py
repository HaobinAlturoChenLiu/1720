from flask import Flask, render_template, request, jsonify
import test

app = Flask(__name__)

@app.route("/")
def index():
    
    f = open("count.txt", "r")
    count = str(f.read())
    f.close()

    f = open("count.txt", "w")
    f.write(str(count+ "hello"))
    f.close()

    return render_template("index.html", count=count)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        f = open("count.txt", "r")
        count = str(f.read())
        f.close()

        f = open("count.txt", "w")
        f.write(str(count+ "hello"))
        f.close()

    return render_template('index.html')

if __name__ == "__main__":
    app.run()
    

