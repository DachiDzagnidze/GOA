def get_average(marks):
    return sum(marks) // len(marks)

def number(bus_stops):
    total = 0
    for on, off in bus_stops:
        total += on - off
    return total

def remove_exclamation_marks(s):
    return s.replace('!', '')

def rental_car_cost(d):
    cost = d * 40
    if d >= 7:
        cost -= 50
    elif d >= 3:
        cost -= 20
    return cost
