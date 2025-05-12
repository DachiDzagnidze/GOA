


# 1 DAVALEBA

def sum_even_numbers(numbers):
    return sum(num for num in numbers if num // 2 * 2 == num)

print(sum_even_numbers([10, 20, 30, 40, 50, 60]))  

# 2 DAVALEBA

def reverse_string(s):
    result = ""
    for i in range(len(s) - 1, -1, -1):
        result += s[i]
    return result

print(reverse_string("abcdefg")) 

# 3 DAVALEBA

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(8))  

# 4 DAVALEBA

def common_elements(list1, list2):
    result = []
    for elem in list1:
        if elem in list2:
            result.append(elem)
    return result

print(common_elements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]))  

# 5 DAVALEBA

def count_vowels(s):
    vowels = "aeiou"
    return sum(1 for char in s.lower() if char in vowels)

print(count_vowels("The quick brown fox jumps over the lazy dog"))  

# 6 DAVALEBA

def sort_list(numbers):
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] > numbers[j]:
                numbers[i], numbers[j] = numbers[j], numbers[i]
    return numbers

print(sort_list([64, 34, 25, 12, 22, 11, 90])) 

# 7 DAVALEBA 

def is_permutation(s1, s2):
    if len(s1) != len(s2):
        return False
    for char in s1:
        if s1.count(char) != s2.count(char):
            return False
    return True

print(is_permutation("acts", "cats"))  

# 8 DAVALEBA


def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n - i * (n // i) == 0:
            return False
    return True

print(is_prime(37)) 

# 9 DAVALEBA

def sort_strings_by_length(strings):
    return sorted(strings, key=len)

print(sort_strings_by_length(["apple", "banana", "cherry", "date"]))  
