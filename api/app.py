from flask import Flask, g
from flask_restful import Resource, Api, reqparse
app = Flask(__name__)
api = Api(app)
