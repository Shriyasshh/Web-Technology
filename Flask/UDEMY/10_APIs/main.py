from flask import Flask ,jsonify

app = Flask(__name__)
@app.route('/')
def json():
    marks={
        "Harry": 90,
        "Rohan": 80,
        "Hammad": 70,
        "Shubham": 60
    }
    return jsonify(marks)


app.run(debug=True)
