def min_max(lst):
    minimum = lst[0]
    maximum = lst[0]

    for num in lst:
        if num < minimum:
            minimum = num
        if num > maximum:
            maximum = num

    return [minimum, maximum]