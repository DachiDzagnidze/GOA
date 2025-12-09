
#! first task 
divide_by_two = lambda x: x / 2
print(divide_by_two(10)) 


#* second task

my_dict = {"name": "Dachi", "age": 15, "city": "Tbilisi"}

print(my_dict["name"])
print(my_dict["age"])
print(my_dict["city"])



#* third task


numbers = [12, 24, 36, 48, 60, 72, 84, 95, 100, 120]
filtered_numbers = list(filter(lambda x: x > 10, numbers))
print(list(filtered_numbers))


numbers = [12, 24, 36, 48, 60, 72, 84, 95, 100, 120]
added = map(lambda x: x + 10, numbers)
print(list(added))


numbers = [12, 24, 36, 48, 60, 72, 84, 95, 100, 120]
odd_numbers = filter(lambda x: x % 2 != 0, numbers)
print(list(odd_numbers))



from functools import reduce
numbers = [12, 24, 36, 48, 60, 72, 84, 95, 100, 120]
sum_of_numbers = reduce(lambda x, y: x + y, numbers)
print(sum_of_numbers)

