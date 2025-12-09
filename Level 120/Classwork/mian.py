# First task
def union_of_sets(sets_list):
    result = set()
    for s in sets_list:
        result = result.union(s)
    return result


# Second task
def symmetric_difference(set1, set2):
    result = set()
    for elem in set1:
        if elem not in set2:
            result.add(elem)
    for elem in set2:
        if elem not in set1:
            result.add(elem)
    return result


# Third task
def char_frequency(s):
    freq = {}
    for ch in s:
        if ch in freq:
            freq[ch] += 1
        else:
            freq[ch] = 1
    return freq


if __name__ == "__main__":
    s1 = {1, 2}
    s2 = {2, 3}
    s3 = {3, 4}
    print(union_of_sets([s1, s2, s3]))

    a = {1, 2, 3}
    b = {3, 4, 5}
    print(symmetric_difference(a, b))

    print(char_frequency("hello"))
