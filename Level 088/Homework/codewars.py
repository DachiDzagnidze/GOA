

#! FIRST TASK

def solution(string, ending):

    if len(ending) > len(string):
        return False

    for i in range(1, len(ending) + 1):
        if string[-i] != ending[-i]:  
            return False
    return True

#! SECOND TASK

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
    
#! THIRD TASK

def cat_mouse(x):

    distance = x.count('.')  

    if distance <= 3:
        return "Caught!"
    else:
        return "Escaped!"

#! FOURTH TASK

def even_numbers(arr, n):
    evens = []
    for num in arr:
        if num % 2 == 0:
            evens.append(num)
    
    result = []
    for i in range(len(evens) - n, len(evens)):
        result.append(evens[i])
    
    return result