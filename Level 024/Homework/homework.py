

#! shevqmnat funqcia romelic siidan aburnebs kvelaze did strings
def find_longest_word(words):
    if not words:
        return ""
    
    longest_word = max(words, key=len)
    return longest_word


words = ["mountain", "river", "forest", "volcano", "canyon"]
print(find_longest_word(words))  


#! shevqmnat kidev erti msgavsi davalebis shesrulebis alternatiuri gza

def find_longest_word(words):
    if not words:
        return ""
    
    longest_word = ""
    for word in words:
        if len(word) > len(longest_word):
            longest_word = word
    return longest_word


words = ["ocean", "sky", "mountain", "river", "canyon"]
print(find_longest_word(words))  


#! shevqmnat funqcia romelic siidan luwebs gaamravlebs tavis tavze da kent ricxvebs 2 ze
def process_numbers(numbers):
    new_list = []
    
    for num in numbers:
        if num % 2 == 0:
            new_list.append(num * num)
        else:
            new_list.append(num + 2)
    
    return new_list

# Example usage:
numbers = [1, 2, 3, 4, 5, 6]
print(process_numbers(numbers))  
