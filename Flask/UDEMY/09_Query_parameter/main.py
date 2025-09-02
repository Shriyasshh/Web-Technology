from flask import Flask,render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    # name=request.args.get('name', 'Guest')
    # token = request.args.get('token', '0')

    name="John Doe"
    token=25653
    if "name" in request.args.keys():
        name=request.args["name"]
    if "token" in request.args.keys():
        token=request.args["token"]
    # Above works if http://127.0.0.1:5000/?name=Bob&token=3545 is used
    return render_template('index.html',name=name,token=token)

app.run(debug=True)