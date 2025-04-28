
#! codewars.py
def matrixfy(name):
    if name == "":
        return "name must be at least one letter"

    letter_count = 0
    for _ in name:
        letter_count += 1

    side = 1
    while True:
        square = side * side
        if square >= letter_count:
            break
        side += 1

    dots_needed = square - letter_count
    padded_name = name
    for _ in range(dots_needed):
        padded_name += "."

    matrix = []
    for row in range(side):
        start = row * side
        end = start + side
        row_letters = []
        for i in range(start, end):
            row_letters.append(padded_name[i])
        matrix.append(row_letters)

    return matrix