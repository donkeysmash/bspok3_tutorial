import logging
import pprint
import os
from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse
from dao.donkey_dao import DonkeyDAO
from util.config import host_ip


app = Flask(__name__)

api = Api(app)
parser = reqparse.RequestParser()

class Donkeys(Resource):
    def get(self):
        print('getting all donkeys')
        return DonkeyDAO().get_all(), 200

    def post(self): 
        print('posting a donkey')
        return DonkeyDAO().post(parser), 201


class Donkey(Resource):
    def get(self, donkey_id):
        print('getting one donkey')
        return DonkeyDAO().get_by_id(donkey_id), 201

    def delete(self, donkey_id):
        print('deleting all donkeys')
        return DonkeyDAO().remove(donkey_id), 201
        

api.add_resource(Donkeys, '/donkeys')
api.add_resource(Donkey, '/donkeys/<string:donkey_id>')

if __name__ == '__main__':
    app.debug = True
    app.run(host=host_ip, port=5000, debug=True)

