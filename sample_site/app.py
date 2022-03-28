from flask import Flask, render_template, jsonify
import test

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == "POST":
        f = open("count.txt", "r")
        count = str(f.read())
        f.close()

        f = open("count.txt", "w")
        f.write(str(count+ "hello"))
        f.close()

    # Render HTML with count variable
    return render_template("index.html", count=count)