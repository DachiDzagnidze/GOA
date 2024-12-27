


def sum_two_smallest_numbers(numbers):
    # დავალაგოთ რიცხვების სია ზრდადობის თანმიმვდერობით
    sorted_numbers = sorted(numbers)
    
    # პირველი ორი ელემენტის (ორივე უმცირესი რიცხვების) ჯამი
    return sorted_numbers[0] + sorted_numbers[1]
