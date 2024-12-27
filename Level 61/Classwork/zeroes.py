def move_zeros(lst):
    result = []
    

    for number in lst:
        if number != 0:
            result.append(number)
    

    result.extend([0] * lst.count(0))
    
    return result