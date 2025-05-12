def similarity(a, b):
    intersection = 0
    union = 0
    for i in a:
        if i in b:
            intersection += 1
        union += 1
    
    for i in b:
        if i not in a:
            union += 1
    
    return intersection / union