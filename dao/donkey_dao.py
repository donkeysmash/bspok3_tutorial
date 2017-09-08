# from dao.base_dao import BaseDAO

# class DonkeyDAO(BaseDAO):
from flask import flask, jsonify
from flask_pymongo import PyMongo

class DonkeyDAO:
    def __init__(self):
        self.connection = PyMongo(flask.current_app)

    def get_all(self):
        
        donkeys = self.connection.db[collection_name]
        return {
            'testkey': 'value123'
        }
