import math

def count_area_rectangle(length, width):
    # მართკუთედის ფართობის გამოთვლა
    return length * width

def count_area_circle(radius):
    # წრის ფართობის გამოთვლა
    return math.pi * radius ** 2

def count_area_triangle(a, b, c):
    # სამკუთხედის ფართობის გამოთვლა ჰერონის ფორმულით
    if a + b > c and a + c > b and b + c > a:  
        s = (a + b + c) / 2
        return math.sqrt(s * (s - a) * (s - b) * (s - c))
    else:
        return "invalduri sides (gverdebi)"

# Example Usage:
print("Rectangle Area:", count_area_rectangle(5, 10))  # Rectangle
print("Circle Area:", count_area_circle(7))           # Circle
print("Triangle Area (martebulia):", count_area_triangle(3, 4, 5))  # Triangle (valid)
print("Triangle Area (invalduri sides (gverdebi)):", count_area_triangle(1, 2, 10))  # Triangle (invalid sides)












