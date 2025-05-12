


#! davaleba 1
# gamovikenot def funqcia
def numbers(numbers):
    even_numbers = [num for num in numbers if (num % 2) == 0]
    return even_numbers

# davprintot resulti
list = [1, 2, 3, 4, 5, 6 ,4, 3, 2, 1, 12]
result = numbers(list)
print(result) 


#! DAVALEBA 2
def filter_short_strings(strings):
 
    # chamovwerpt mxolod is stringebi romelta sigrdze naklebia an tolia 4is
    short_strings = [s for s in strings if len(s) <= 4]
    return short_strings

# gamovitanot shedegi
input_list = ["dachi" , "gio" , "mate", "dato" , "nia" , "levani"]
result = filter_short_strings(input_list)
print(result)  

#! DAVALEBA 3

def filter_integers(input_list):
    return [item for item in input_list if isinstance(item)]

example_list = [1, 2.5, 3, 4.0, 5]
filtered_list = filter_integers(example_list)
print(filtered_list)  
