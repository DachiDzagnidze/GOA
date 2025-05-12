






def char_concat(word):
    result = ""
    length = len(word)
    for i in range(length // 2):
        result += word[i] + word[-(i+1)] + str(i+1)
    return result