import logging
import pprint
import os
from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from dao.donkey_dao import DonkeyDAO
from util.config import host_ip


app = Flask(__name__)
CORS(app)

api = Api(app)

class Donkeys(Resource):
    def get(self):
        print('getting all donkeys')
        return DonkeyDAO().get_all(), 200

    def post(self):
        print('posting a donkey')
        parser = reqparse.RequestParser()
        return DonkeyDAO().post(parser), 200


class Donkey(Resource):
    def get(self, donkey_id):
        print('getting one donkey')
        return DonkeyDAO().get_by_id(donkey_id), 200

    def delete(self, donkey_id):
        print('deleting all donkeys')
        return DonkeyDAO().remove(donkey_id), 200

class Donkey_Populate(Resource):
    def post(self):
        print('populating with random donkeys')
        parser = reqparse.RequestParser()
        return DonkeyDAO().populate_with_random(parser), 200

class Donkey_Purge(Resource):
    def post(self):
        print('purging donkeys')
        return DonkeyDAO().purge(), 200

api.add_resource(Donkeys, '/donkeys')
api.add_resource(Donkey, '/donkeys/<string:donkey_id>')
api.add_resource(Donkey_Populate, '/donkeys/populate')
api.add_resource(Donkey_Purge, '/donkeys/purge')

if __name__ == '__main__':
    app.debug = True
    app.run(host=host_ip, port=5000, debug=True)
