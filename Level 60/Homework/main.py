
#! reverse code
def reverse_words(text):
    result = []
    word = []

    for char in text:
        if char == " ":
            
            for i in range(len(word) - 1, -1, -1):
                result.append(word[i])
                
            word = []  
            result.append(" ") 
        else:
            word.append(char)


    for i in range(len(word) - 1, -1, -1):
        result.append(word[i])
    output = ""
    
    for char in result:
        output += char

    return output


    #! second way to slove 

def reverse_words(text):
    result = []
    word = ""
    
    for i in range(len(text)):
        
        if text[i] == " ":
            
            if word:
                result.append(word[::-1])
                word = ""
                
            result.append(" ")
        else:
            word += text[i]
    
    if word:
        result.append(word[::-1])
    
    return ''.join(result)






    #! draw stairs

def draw_stairs(n):

    result = []
    

    for i in range(n):
        step = ' ' * i + 'I'  

        result.append(step)
    return '\n'.join(result)




#! matrix code


def get_matrix(n):
    matrix = []
    
    for i in range(n):
        row = []  
        for j in range(n):
            if i == j: 
                row.append(1)
            else:  
                row.append(0)
        matrix.append(row) 
    
    return matrix
    