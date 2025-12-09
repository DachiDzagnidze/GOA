

#! FIRST TASK

def battle(x, y):
    
    power_dict = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
        'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17,
        'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
    }
    

    power_x = sum(power_dict[char] for char in x)
    power_y = sum(power_dict[char] for char in y)
    

    if power_x > power_y:
        return x
    elif power_y > power_x:
        return y
    else:
        return "Tie!"
    


#! SECOND TASK



def count_zeros(x):
    count = 0 
    for number in range(1, x + 1):
        while number > 0:
            digit = number % 10
            if digit == 0:
                count += 1
            number = number // 10
    return count



#! THIRD TASK


def open_or_senior(data):
    result = []
    for member in data:
        age, handicap = member
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result



#! FOURTH TASK


def calculator(x, y, op):

    if type(x) != int and type(x) != float:
        return "unknown value"
    if type(y) != int and type(y) != float:
        return "unknown value"
    

    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        if y == 0:  
            return "unknown value"
        return x / y
    else:
        return "unknown value"