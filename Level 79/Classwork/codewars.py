

#* first solution
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



#* second solution


def is_flush(cards):

    suits = [card[-1] for card in cards]
    

    return len(set(suits)) == 1
