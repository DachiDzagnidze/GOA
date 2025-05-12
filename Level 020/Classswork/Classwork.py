


def add(num1, num2, operation):
    if operation == "+":
        print(num1 + num2)
    elif operation == "-":
        print(num1 - num2)
    elif operation == "*":
        print(num1 * num2)
    elif operation == "/":
        print(num1 / num2)
    else:
        print("Invalid Operation")

add(5, 3, "+")
add(10, 8, "*")
add(10, 5, "/")
add(20, 10, "-")