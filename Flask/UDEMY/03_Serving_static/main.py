from flask import Flask , render_template 

app = Flask(__name__)

@app.route("/")
def HRLLO():
    return render_template("index.html")


app.run(port=5000, debug=True)