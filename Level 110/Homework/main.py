class Animal:
    def __init__(self, species, age, color):
        self.species = species
        self.age = age
        self.color = color
    def info(self):
        return f"{self.species} {self.age} {self.color}"

class Car:
    def __init__(self, brand, year, color):
        self.brand = brand
        self.year = year
        self.color = color
    def info(self):
        return f"{self.brand} {self.year} {self.color}"

class Human:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender
    def info(self):
        return f"{self.name} {self.age} {self.gender}"

animals = [
    Animal("Dog", 5, "Brown"),
    Animal("Cat", 3, "Black"),
    Animal("Bird", 1, "Blue")
]

cars = [
    Car("Toyota", 2020, "White"),
    Car("Honda", 2018, "Red"),
    Car("Ford", 2019, "Blue")
]

humans = [
    Human("Dachi", 15, "Male"),
    Human("Lasha", 30, "Male"),
    Human("Nino", 25, "Female")
]

for a in animals:
    print(a.info())

for c in cars:
    print(c.info())

for h in humans:
    print(h.info())
