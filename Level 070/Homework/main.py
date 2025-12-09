


#! 1) შექმენით ფუნქცია რომელიც აბრუნებს 2დ მასივს (ზრდადი რიცხვების) სვეტების დს რიგების მიხედვით, მაგ: func(2,2) --> [ [1,2], [3,4] ]


# def crate_matrix(rows, colmus): 
#     array = []
#     num = 1
#     for i in range(rows):
#         row = []
#         for j in range(colmus):
#             row.append(num)
#             num += 1
#         array.append(row)
#     return array

# result = crate_matrix(15, 4)
# print(result)


#! 2) შექმენით ფუნქცია რომელსაც გადაეცემა nxn მატრიცა და დაპრინტავს მის 1) სვეტებს, 2) რიგებს, 3) დიაგონალებს


def print_matrix_details(matrix):

     #* columns
  
    colume = []
    for col in range(len(matrix[0])):
       colum_value = []
       for row in range(len(matrix)):
           colum_value.append(matrix[row][col])
       colume.append(colum_value)
    print("columes",colume)
           

    # #*rows
    print("rows: ")
    for i in range(len(matrix)):
        print(matrix[i])
        
    #* diagonals
    print("diagonal 1: ")
    for i in range(len(matrix)):
        print(matrix[i][i])
    print("diagonal 2: ")
    for j in range(len(matrix)):
        print(matrix[j][len(matrix) - 1 - j])
        
        




martix = [  
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]



print_matrix_details(martix)

#! rows


