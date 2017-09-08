import logging
import pprint
import os
from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from model.donkey import DonkeyModel

isDocker = True if os.environ['USER'] == 'docker' else False

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'animal'
app.config['MONGO_HOST'] = 'mongo' if isDocker else None
host_ip = '0.0.0.0' if isDocker else 'localhost'

api = Api(app)
parser = reqparse.RequestParser()
# mongo = PyMongo(app)


class Donkeys(Resource):
    def get(self):
        all_donkeys = DonkeyModel.dao.get_all()
        return all_donkeys

api.add_resource(Donkeys, '/donkeys')

if __name__ == '__main__':
    app.run(host=host_ip, port=5000, debug=True)
