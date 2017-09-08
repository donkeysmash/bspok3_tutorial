from dao.donkey_dao import DonkeyDAO
class DonkeyModel:
    def __init__(self, data):
        self.id = str(data['_id'])
        self.name = data.name
        self.age = data.age

    @staticmethod
    def gen_dao():
        return DonkeyDAO()
