def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {name}!".format(name=name)




def reverse_words(s):
    return ' '.join(s.split()[::-1])
