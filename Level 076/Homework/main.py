


def sum_digits(n):
    n = abs(n)  # uarkofitzec rom sheedzlos operacia davamatot es cvladi
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  # aq unda shevinaxot ganakofi
    return result

print(sum_digits(123))  
print(sum_digits(405))  
print(sum_digits(-567)) 









#!max1 = max(lst)
#!max2 = max(lst)
#! orives erti da igive mnishvneloba aqvs pirvelive jerze max(lst) shi orive cvlads aniwebs ertsa da imave ricxvs


def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)  #* amovigot udidesi elementi siidan
    max2 = max(lst)   #* exla kide avipovot meore udidesi elementi
    
    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  
print(sum_two_largest([10, 10, 5, 3]))  
print(sum_two_largest([1, 2, 3, 4]))     
print(sum_two_largest([7]))              
