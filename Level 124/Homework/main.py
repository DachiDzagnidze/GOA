def remove_smallest(numbers):
    if not numbers:
        return []
    min_value = min(numbers)
    min_index = numbers.index(min_value)
    return numbers[:min_index] + numbers[min_index+1:]
