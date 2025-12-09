
#! FIRST TASK
def reverse_letter(st):
    result = ''
    
    for char in st:
        if char.isalpha():
            result += char
    
    return result[::-1]


#! SECOND TASK

def comfortable_word(word):
    left_hand = "qwertasdfgzxcvb"
    right_hand = "yuiophjklmn"
    
    prev_hand = None
    
    for char in word:
        if char in left_hand:
            curr_hand = 'left'
        elif char in right_hand:
            curr_hand = 'right'
        
        if prev_hand is not None and prev_hand == curr_hand:
            return False
        
        prev_hand = curr_hand
    
    return True

