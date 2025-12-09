def calculator(equation):
    left, operator, right = equation.split()
    num1 = len(left)
    num2 = len(right)

    if operator == '+':
        result = num1 + num2
    elif operator == '-':
        result = num1 - num2
    elif operator == '*':
        result = num1 * num2
    elif operator == '//':
        result = num1 // num2

    return '.' * result
