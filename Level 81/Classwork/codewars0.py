def bonus_time(salary, bonus):
    if bonus:
        total = salary * 10
    else:
        total = salary
    return f"${total}"