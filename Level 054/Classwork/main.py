
import math

def count_area(shape='rectangle', length=5, width=10, radius=7, a=3, b=4, c=5):
    if shape == 'rectangle':  # მართკუთხედი
        return length * width
    
    elif shape == 'circle':  # წრის ფართობი
        return math.pi * radius ** 2
    
    elif shape == 'triangle':  # სამკუთხედის ფართობი Heron-ის ფორმულით
        if a + b > c and a + c > b and b + c > a:  # სამკუთხედის კანონი
            s = (a + b + c) / 2
            return math.sqrt(s * (s - a) * (s - b) * (s - c))
        else:
            return "Invalid triangle sides"
    
    else:
        return "Invalid shape"
