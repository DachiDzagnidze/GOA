
#! first task

def solution(string, ending):

    if len(ending) > len(string):
        return False

    for i in range(1, len(ending) + 1):
        if string[-i] != ending[-i]:  
            return False
    return True


#! second task

def even_or_odd(s):
    even_sum = 0
    odd_sum = 0
    
    for digit in s:  
        num = int(digit)  
        if num % 2 == 0:  
            even_sum += num  
        else:  
            odd_sum += num  
    
    if even_sum > odd_sum:
        return "Even is greater than Odd"
    elif odd_sum > even_sum:
        return "Odd is greater than Even"
    else:
        return "Even and Odd are the same"
    


#! third task
    
def is_solved(board):
    n = len(board)
    expected = list(range(n * n))
    flat_board = [num for row in board for num in row]
    return flat_board == expected


#! fourth task

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
    

#! fifth task


def elevator_distance(array):
    total_distance = 0
    i = 1
    while i < len(array):
        difference = array[i] - array[i - 1]
        if difference < 0:
            difference = -difference
        total_distance = total_distance + difference
        i = i + 1
    return total_distance