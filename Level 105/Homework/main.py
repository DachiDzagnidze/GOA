def matrix_sum(matrix):
    total = 0
    for row in matrix:
        for num in row:
            total += num
    return total

def transpose_matrix(matrix):
    n = len(matrix)
    transposed = []
    for i in range(n):
        new_row = []
        for j in range(n):
            new_row.append(matrix[j][i])
        transposed.append(new_row)
    return transposed

def diagonal_sums(matrix):
    n = len(matrix)
    main_diagonal = 0
    secondary_diagonal = 0
    for i in range(n):
        main_diagonal += matrix[i][i]
        secondary_diagonal += matrix[i][n - 1 - i]
    return main_diagonal, secondary_diagonal
