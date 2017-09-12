import names
from random import randint
from pymongo import MongoClient
from model.donkey import DonkeyModel
from util.config import db_name, db_host
from bson.objectid import ObjectId


collection_name = 'donkeys'

class DonkeyDAO:
    def __init__(self):
        self.connection = MongoClient(db_host)
        self.db = self.connection[db_name]
        self.collection = self.db[collection_name]

    def get_all(self):
        all_donkeys = []
        for donkey_data in self.collection.find():
            all_donkeys.append(DonkeyModel(donkey_data).__dict__)
        return all_donkeys

    def get_by_id(self, donkey_id):
        return DonkeyModel(self.collection.find_one({'_id': ObjectId(donkey_id)})).__dict__

    def remove(self, donkey_id):
        count = self.collection.delete_one({'_id': ObjectId(donkey_id)}).deleted_count
        return {'count': count }


    def post(self, parser):
        #TODO grab these from the model itself
        parser.add_argument('name')
        parser.add_argument('age')
        args = parser.parse_args()
        inserted_id = self.collection.insert(args)
        args['_id'] = inserted_id
        return DonkeyModel(args).__dict__

    def populate_with_random(self, parser):
        parser.add_argument('count')
        count = int(parser.parse_args()['count'] or 10)

        bulk = []
        for i in range(0, count):
            entry = {}
            entry['name'] = names.get_full_name()
            entry['age'] = randint(1, 100)
            bulk.append(entry)
        return {'count': len(self.collection.insert_many(bulk).inserted_ids)}

    def purge(self):
        return {'count': self.collection.delete_many({}).deleted_count}
