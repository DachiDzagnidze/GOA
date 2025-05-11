

#! first task

def most_frequent_item_count(collection):
    if not collection:
        return 0
    return max(collection.count(item) for item in set(collection))


#! second task
def share_price(invested, changes):
    for change in changes:
        invested *= (1 + change / 100)
    return "{:.2f}".format(invested)

#! third task

def is_square(n):    
    return n >= 0 and int(n ** 0.5) ** 2 == n

#! fourth task

def descending_order(num):
    return int(''.join(sorted(str(num), reverse=True)))


#! fifth task
def xo(s):
    s = s.lower()
    return s.count('x') == s.count('o')