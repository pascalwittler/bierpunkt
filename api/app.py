from flask import Flask, g
from flask_restful import Resource, Api, reqparse
app = Flask(__name__)
api = Api(app)

@app.route('/')
def index():
    return {'message': 'Hello world!', 'data': {}}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2342, debug=True)
