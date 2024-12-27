

#reverse

def reverse_words(text):
    text = text.split(" ")
    result = []
    for word in text:
        result.append(word[::-1])
    
    return " ".join(result)



    #! draw stairs

def draw_stairs(n):
    result = []
    for i in range(n):
        step = " " * i + "I"

        result.append(step)
    return '\n'. join(result)
    

#! matrix code


def get_matrix(n):
    result = []
    for i in range(n):
        inner = []
        for j in range(n - 1):
            inner.append(0)
        inner.insert(i, 1)
        result.append(inner)
    return result
