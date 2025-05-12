

def matrix_sums(matrix):
    row_sums = []

    # რიგების ჯამების მიღება
    for i in range(len(matrix)):
        row_sum = 0
        for j in range(len(matrix[i])):
            row_sum += matrix[i][j]
        row_sums.append(row_sum)

    # სვეტების ჯამების მიღება
    column_sums = [0] * len(matrix[0])
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            column_sums[j] += matrix[i][j]

    return row_sums, column_sums


matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

rows, columns = matrix_sums(matrix)
print("რიგების ჯამები:", rows)
print("სვეტების ჯამები:", columns)
