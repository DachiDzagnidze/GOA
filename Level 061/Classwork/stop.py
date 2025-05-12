
def spin_words(sentence):
    new_list = []
    words = sentence.split()
    for word in words:
        if len(word) >= 5:
            new_list.append(word[::-1])
        else:
            new_list.append(word)
    return " ".join(new_list)