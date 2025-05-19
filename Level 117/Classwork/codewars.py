
def describe_age(a):return "You're a(n) "+("kid"if a<=12 else"teenager"if a<=17 else"adult"if a<=64 else"elderly")



def bin_rota(arr):
    rota = []
    for i in range(len(arr)):
        row = arr[i]
        if i % 2 == 0:
            for j in range(len(row)):
                rota.append(row[j])
        else:
            temp = []
            j = len(row) - 1
            while j >= 0:
                temp.append(row[j])
                j -= 1
            for name in temp:
                rota.append(name)
    return rota