

def remove_smallest(numbers):
    if not numbers:
        # თუ სია ცარიელია დააბრუნოთ ცარიელი სია
        return []
    
    # მოძებნოთ ყველაზე მცირე მნიშვნელობა და მისი ინდექსი
    min_value = min(numbers)
    min_index = numbers.index(min_value)
    
    # დააბრუნეთ ახალი სია უმცირესი მნიშვნელობის წაშლის შემდეგ
    return numbers[:min_index] + numbers[min_index+1:]
