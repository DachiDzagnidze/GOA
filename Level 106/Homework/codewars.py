
# first task
def to_underscore(s):
    s = str(s)
    result = ""
    for i in range(len(s)):
        if s[i].isupper() and i != 0:
            result += "_"
        result += s[i].lower()
    return result

# second task
def is_sorted_and_how(array):
    ascending = True
    descending = True

    for i in range(1, len(array)):
        if array[i] < array[i - 1]:
            ascending = False
        if array[i] > array[i - 1]:
            descending = False

    if ascending:
        return "yes, ascending"
    if descending:
        return "yes, descending"
    return "no"


# third task

def sort(initial_array, sorting_array):
    result = [None] * len(initial_array)
    for i in range(len(sorting_array)):
        result[sorting_array[i]] = initial_array[i]
    return result
