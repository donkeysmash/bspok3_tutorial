import logging
import pprint
from flask import Flask
from flask_restful import Resource, Api
from flask_pymongo import PyMongo

app = Flask(__name__)
api = Api(app)
mongo = PyMongo(app)


class HelloWorld(Resource):
    def get(self):
        logging.info('getting')
        print('getting...')
        return {'hello': 'worlddddd'}


api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
