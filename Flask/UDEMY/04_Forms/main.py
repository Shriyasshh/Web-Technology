from flask import Flask ,request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    # print(request.method)
    # print(request.form)

    if request.method == 'POST':
        # Handle the form
        with open('data.txt', 'a') as f:
            name = request.form['name']
            email = request.form['email']
            f.write(f'The Name: {name} and the Email: {email}\n')
        return render_template('contact.html', name=name, email=email)
    
    else:
         return render_template('contact.html')

app.run(debug=True)