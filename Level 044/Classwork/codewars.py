

def sum_two_smallest_numbers(numbers):
    # ori rivcxvis inicializeba
    min1 = float('inf')
    min2 = float('inf')
    
    for num in numbers:
        if num < min1:
            min2 = min1  
            min1 = num   
        elif num < min2:
            min2 = num   
            
    return min1 + min2  

