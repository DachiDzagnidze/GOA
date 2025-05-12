
#! COUNTS DAVALEBEBII

# 1) davaleba
numbers = [1, 2, 5, 4, 5, 5, 2, 6, 8, 9]
index = numbers.index(5)
print(index)

# 2) davaleba
words = ["apple", "big", "gargari", "bawia", "kakali"]
count = sum(word.count('a') for word in words)
print(count)

# 3) davaleba
Boolean_types = [True, False, True, True, False, False]
print(Boolean_types.count(True))

# 4) davaleba
nested_list = [[1, 2], [3, 4], [5, 6], [3, 4], [7, 8], [3, 4]]
sublist = [3, 4]
count = nested_list.count(sublist)
print(count)

