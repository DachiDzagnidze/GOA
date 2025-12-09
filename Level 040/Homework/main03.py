


def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)  # shevqmnat cvladi romelic daiwkebs 0 idan, iteracia movaxdinot da minimaluri ricxvi rigshi daumarot mtlian jams
    total_sum = 0  # shevqmnat cvladi romelic daiwkebs 0 idan
    
    for row in numbers:  # movaxdinot iteracia matricashi
        total_sum += min(row)  # vipovot minimaluri ricxvi rigshi da daumatot mtlian jams
    
    return total_sum  
