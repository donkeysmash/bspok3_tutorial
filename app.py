import logging
import pprint
from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'animal'
app.config['MONGO_HOST'] = 'mongo'

api = Api(app)
mongo = PyMongo(app)


class HelloWorld(Resource):
    def get(self):
        one_donkey = mongo.db.donkeys.find_one()

        return {
          'name': str(one_donkey)
        }

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
