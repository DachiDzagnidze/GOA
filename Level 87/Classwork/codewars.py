def elevator_distance(array):
    total_distance = 0
    i = 1
    while i < len(array):
        difference = array[i] - array[i - 1]
        if difference < 0:
            difference = -difference
        total_distance = total_distance + difference
        i = i + 1
    return total_distance