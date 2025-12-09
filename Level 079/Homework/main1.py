

def sum_of_digits(number):
    if 100 <= number <= 999:  # vamowmebt samnishnaa tuara
        return sum(int(digit) for digit in str(number))
    else:
        return "Please enter a three-digit number."


num = int(input("Enter a three-digit number: "))
print(f"Digit sum: {sum_of_digits(num)}")
