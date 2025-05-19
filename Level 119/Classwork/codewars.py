def multi_table(number):
    table = ""  
    for i in range(1, 11): 
        row = f"{i} * {number} = {i * number}"  
        table += row  
        if i < 10:  
            table += "\n"
    return table  

def wave(str):
    if str == []:
        return []
    else:
        result = []
        for i in range(len(list(str))):
            if str[i] != " ":
                str_update = list(''.join(str).lower())
                str_update[i] = str_update[i].upper()
                result.append(''.join(str_update))
        return result
    





def is_flush(cards):

    suits = [card[-1] for card in cards]
    

    return len(set(suits)) == 1
