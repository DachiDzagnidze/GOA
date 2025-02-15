
def multi_table(number):
    table = ""  
    for i in range(1, 11): 
        row = f"{i} * {number} = {i * number}"  
        table += row  
        if i < 10:  
            table += "\n"
    return table  