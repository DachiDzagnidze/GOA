
#! codewars task N1
def area_or_perimeter(l, w):
    # Check if it's a square
    if l == w:
        return l * w  # Return area
    else:
        return 2 * (l + w)  # Return perimeter

#! codewars task N2
def string_to_array(s):
    return s.split() if s != '' else ['']

#############################
def string_to_array(s):
    result = []
    word = ''
    for char in s:
        if char == ' ':
            if word:
                result.append(word)
                word = ''
        else:
            word += char
    if word:
        result.append(word)  # Add the last word if it exists
    return result if s else ['']


#! codewars task N3
def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]
