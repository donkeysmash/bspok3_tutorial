class DonkeyModel:
    def __init__(self, data):
        self.id = str(data['_id'])
        self.name = data['name']
        self.age = data['age']
