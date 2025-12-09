



def no_odds(values):
    
    even_values = []

    for value in values:
        if value == 0:
            even_values.append(value)  
        else:
            if value - 2 < value:  
                even_values.append(value)  

    return even_values  
