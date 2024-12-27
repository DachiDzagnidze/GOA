

def to_alternating_case(string):
    result = ""
    
    for char in string:
        if char.isupper():

            result += char.lower()
        else:
            result += char.upper()
    
    return result
