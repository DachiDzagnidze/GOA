

def is_anagram(s1, s2):
    # Normalize both strings by converting them to lowercase and sorting the characters
    return sorted(s1.lower()) == sorted(s2.lower())

# Example usage:
print(is_anagram("Listen", "Silent"))  # Output: True
print(is_anagram("Hello", "World"))    # Output: False
