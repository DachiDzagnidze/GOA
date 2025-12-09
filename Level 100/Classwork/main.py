def billboard(name, price=30):
    total_cost = 0
    for char in name:
        total_cost += price
    return total_cost