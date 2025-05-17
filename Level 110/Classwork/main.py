class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def get_perimeter(self):
        return 2 * (self.width + self.height)


class Animal:
    def __init__(self, name):
        self.name = name

class Mammal(Animal):
    def __init__(self, name, has_fur=True):
        super().__init__(name)
        self.has_fur = has_fur

class Dog(Mammal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed


class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        return f"{self.brand} მანქანა მოძრაობს ბენზინზე."

    def info(self):
        return f"ბრენდი: {self.brand}"

class ElectricCar(Car):
    def __init__(self, brand, battery_range):
        super().__init__(brand)
        self.battery_range = battery_range

    def drive(self):
        return f"{self.brand} მანქანა მოძრაობს ელექტროზე!"

    def info(self):
        parent_info = super().info()
        return f"{parent_info}, ბატარეის დიაპაზონი: {self.battery_range} კმ"
