# first task
def sum_digits(n):
    n = abs(n)
    result = 0
    while n > 0:
        result += n % 10
        n //= 10
    return result

print(sum_digits(123))   
print(sum_digits(405))   
print(sum_digits(-987))  

# second task
def sum_two_largest(lst):
    if len(lst) < 2:
        return None
    max1 = max(lst)
    lst_copy = lst.copy()
    lst_copy.remove(max1)
    max2 = max(lst_copy)
    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))   
print(sum_two_largest([10, 10, 5, 3]))    
