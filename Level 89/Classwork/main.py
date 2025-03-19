

#! FIRST TASK
def count_letters_and_digits(s):
    count = 0
    for char in s:

        if (char >= 'a' and char <= 'z') or (char >= 'A' and char <= 'Z') or (char >= '0' and char <= '9'):
            count += 1
    return count

#! SECOND TASK
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
    



#! THIRD TASK

def reverse_words(text):
    regult = []
    word = ""
    
    for i in range(len(text)):
        
        if text[i] == " ":
            
            if word:
                regult.append(word[::-1])
                word = ""
                
            regult.append(" ")
        else:
            word += text[i]
    
    if word:
        regult.append(word[::-1])
    
    return ''.join(regult)