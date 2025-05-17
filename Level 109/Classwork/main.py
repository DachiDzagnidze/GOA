def func(operation, *numbers):
    if len(numbers) < 1:
        raise ValueError("გთხოვთ გადაიცეს მინიმუმ ერთი რიცხვი ფუნქციის შემდეგ.")
    
    result = numbers[0]
    for num in numbers[1:]:
        result = operation(result, num)
    
    return result
