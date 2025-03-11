def smallest_integer(matrix):
    flattened = []
    for row in matrix:
        for num in row:
            flattened.append(num)
    

    smallest_missing = 0
    while True:
        found = False
        for num in flattened:
            if num == smallest_missing:
                found = True
                break
        if not found:
            return smallest_missing
        smallest_missing += 1