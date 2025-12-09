

def stray(arr):
    unique_elements = set(arr)
    
    # კომპლექტში ზუსტად ორი უნიკალური ელემენტი უნდა იყოს
    if len(unique_elements) != 2:
        raise ValueError("Input array.")
    
    # დავაკონვერტოთ list
    unique_list = list(unique_elements)
    
    # დააბრუნეთ ელემენტი რომელიც მხოლოდ ერთხელ გამოჩნდება
    if arr.count(unique_list[0]) == 1:
        return unique_list[0]
    else:
        return unique_list[1]
    