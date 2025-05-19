def series_sum(n):
    total = 0
    for i in range(n):
        total += 1 / (1 + i * 3)
    return f"{total:.2f}"
