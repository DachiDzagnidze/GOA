number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
filtered_numbers = list(filter(lambda x: x % 12 == 0, number))
print(filtered_numbers)




#! codewars 1


def count_red_beads(n):
    if n < 2:
        return 0
    else:
        return (n - 1) * 2
    



#! codewars 2

def small_enough(array, limit):
    for num in array:
        if num > limit:
            return False
    return True



