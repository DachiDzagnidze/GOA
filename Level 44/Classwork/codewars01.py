

def square_digits(num):
    result = ''
    for digit in str(num):
        squared = int(digit) ** 2  # თითოეული ციფრის კვადრატი
        result += str(squared)     # კვადრატების ჯაჭვში ჩამატება
    return int(result)             # საბოლოოდ, სტრიქონის კონვერტაცია უკან რიცხვში
