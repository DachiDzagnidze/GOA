
#! Task 1
def share_price(invested, changes):
    for change in changes:
        invested *= (1 + change / 100)
    return "{:.2f}".format(invested)


#! Task 2
def powers(n):
    result = []
    power = 0
    while n > 0:
        if n & 1:
            result.append(2 ** power)
        n >>= 1
        power += 1
    return result


#! Task 3
def nth_char(words):
    result = ""
    index = 0
    for word in words:
        result += word[index]
        index += 1
    return result


#! Task 4
def missing_no(nums):
    expected_sum = 100 * 101 // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum


#! Task 5
def between_extremes(numbers):
    return max(numbers) - min(numbers)
