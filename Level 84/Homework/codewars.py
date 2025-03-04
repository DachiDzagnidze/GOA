
#! codewars solution 1
def same_case(a, b):
    if not a.isalpha() or not b.isalpha():
        return -1
    if (a.islower() and b.islower()) or (a.isupper() and b.isupper()):
        return 1
    return 0

#! codewars solution 2


def starting_mark(height):
    x1, y1 = 1.52, 9.45
    x2, y2 = 1.83, 10.67

    m = (y2 - y1) / (x2 - x1)

    b = y1 - m * x1

    mark = m * height + b

    return round(mark, 2)


#! codewars solution 3

def find_multiples(n, limit):
    result = []
    i = n
    while i <= limit:
        result.append(i)
        i += n
    return result


#! codewars solution 4
def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    count_positive = 0
    sum_negatives = 0
    
    for num in arr:
        if num > 0:
            count_positive += 1
        elif num < 0:
            sum_negatives += num
            
    return [count_positive, sum_negatives]