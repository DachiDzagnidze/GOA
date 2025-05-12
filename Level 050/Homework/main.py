
# მატრიცების ჯამის გამოთვლის ფუნქცია
def add(mat1, mat2):
    result = []
    for i in range(len(mat1)):
        row = []
        for j in range(len(mat1[0])):
            row.append(mat1[i][j] + mat2[i][j])
        result.append(row)
    return result

# მატრიცის ტრანსპონირების ფუნქცია
def transpose(mat):
    result = []
    for i in range(len(mat[0])):
        row = []
        for j in range(len(mat)):
            row.append(mat[j][i])
        result.append(row)
    return result

# დიაგონალური ელემენტების ჯამების გამოთვლის ფუნქცია
def diagonal_sums(mat):
    main_sum = 0
    secondary_sum = 0
    for i in range(len(mat)):
        main_sum += mat[i][i]
        secondary_sum += mat[i][len(mat) - 1 - i]
    return main_sum, secondary_sum

# ტესტის მაგალითები
matrix1 = [[1, 3], [1, 4]]
matrix2 = [[4, 1], [2, 2]]
matrix3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# მატრიცების ჯამი
print("Matrix Sum:")
print(add(matrix1, matrix2))

# მატრიცის ტრანსპონირება
print("\nMatrix Transpose:")
print(transpose(matrix1))

# დიაგონალური ჯამები
print("\nDiagonal Sums:")
print(diagonal_sums(matrix3))
