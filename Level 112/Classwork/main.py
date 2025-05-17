class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def info(self):
        return self.name + " is a " + self.species


class Wiki:
    def __init__(self):
        self.data = []

    def add(self, animal):
        self.data.append(animal)

    def show_all(self):
        return [a.info() for a in self.data]
