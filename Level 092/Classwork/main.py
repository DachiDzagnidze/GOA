numbers = [12, 24, 36, 48, 60, 72, 84, 95, 100, 120]
filtered_numbers = list(filter(lambda x: x % 12 == 0, numbers))
print(filtered_numbers)