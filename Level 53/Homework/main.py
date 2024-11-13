import math

def count_area(shape, *args):
    if shape == 'rectangle' and len(args) == 2:  # Rectangle area
        length, width = args
        return length * width
    
    elif shape == 'circle' and len(args) == 1:  # Circle area
        radius = args[0]
        return math.pi * radius ** 2
    
    elif shape == 'triangle' and len(args) == 3:  # Triangle area (Heron's formula)
        a, b, c = args
        if a + b > c and a + c > b and b + c > a:  # Triangle inequality check
            s = (a + b + c) / 2
            return math.sqrt(s * (s - a) * (s - b) * (s - c))
        else:
            return "Invalid triangle sides"
    
    else:
        return "Invalid input"

# Examples:
print(count_area('rectangle', 5, 10))  # Rectangle area
print(count_area('circle', 7))  # Circle area
print(count_area('triangle', 3, 4, 5))  # Triangle area (valid)
print(count_area('triangle', 1, 2, 10))  # Triangle area (invalid sides)
