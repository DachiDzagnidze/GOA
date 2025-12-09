

#! 8 kyu

def whatday(num):
    if num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"
    

import re

def string_clean(s):
    return re.sub(r'\d', '', s)



#! 7kyu

def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"
    
    vowels = 'aeiou'
    third_char = name[2].lower()

    if third_char in vowels:
        return name[:4]
    else:
        return name[:3]


def convert(st):
    temp = st.replace('a', '#')
    temp = temp.replace('o', 'u')
    return temp.replace('#', 'o')


#! 6 kyu

def palindrome(num):
    if type(num) != int or num < 0:
        return "Not valid"
    s = str(num)
    count = 0
    length = 2
    while length <= len(s):
        start = 0
        while start <= len(s) - length:
            substr = s[start:start+length]
            rev = ''
            i = len(substr) - 1
            while i >= 0:
                rev += substr[i]
                i -= 1
            if substr == rev:
                count += 1
            start += 1
        length += 1
    return count
