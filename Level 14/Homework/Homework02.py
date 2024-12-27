
#! BATONI DAVIT NARIMANIDZIS 15 DAVALEBA

#! for loops


# 2 4 6 8 ese gavagrdzelebitont daprintva 50 mde
for i in range(2, 51, 2):
    print(i)



# davwerot kvela ricxvis kvadrati 1 dan 16 mde
for i in range(1, 16):
    print(i ** 2)



# shevqmnat num cvladi sadac momxmarebeli shemoitans ricxvs
num = int(input("Enter a number: "))
# factorialebis cvladis inizialeba
factorial = 1

# davixmarot for loop rom gamoitvalos factoriali 
for i in range(1, num + 1):
    factorial *= i

print("The factorial of", num, "is", factorial)



# daumatot txutmeti 100 mde
for i in range(15, 101, 15):
    print(i)




# shevqmnat factorialis gamosatvleli programa
num = int(input("Enter a number: "))

for i in range(1, 11):
    print(num, "x", i, "=", num * i)




#! while loops



a, b = 0, 1

# sanam ariqneba meti 50 ze maqamde weros
while a < 50:
    print(a)
    a, b = b, a + b




# shemovataninot momxamrebels ricxvi
num = int(input("Enter a number: "))
# ricxvis striqonebad gadaqceva rom shecvalos igi
num_str = str(num)
reversed_num_str = ""
# ricxvis shemobrunebuli forma
for char in num_str:
    reversed_num_str = char + reversed_num_str
#  shevamowmot aris tuara tavdapirveli ricxvi misi shebrunebuli versiis toli
if str(num) == reversed_num_str:
    print("The number is a palindrome.")
else:
    print("The number is not a palindrome.")




    # shemovataninot ricxvi momxmarebels
num = int(input("Enter a number: "))
    # ritskhvis strikonad gadaktseva da misi cifrebis jamis gamotvla
sum_of_digits = sum(int(digit) for digit in str(num))
    # davwerot jkami ricxvebis aris 
print("The sum of digits is:", sum_of_digits)


# shemovatrialot ricxvebi
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)





#  pirveli ricxvuis shekvana
lagest_num = int(input("Enter the first number (or -1 to finish): "))

         # i s mivaniwot mnisgvneloba 0_i
i = 0

while True:
        # sheamowmebs tu monishvnas momxmarebeli (-1)rom gaitishos programa
    num = int(input("Enter the next number (or -1 to finish): "))
    if num == -1:
        break
    if num > largest_num:
        largest_num = num
    i += 1
# davprintot kvealze didi ricxvi
print("The largest number is:", largest_num)





#! if else statmanmets
# shevakvaninot momxmrebels axlandeli weli
year = int(input("Enter a year: "))
     # shevamowmot es weliwadi nakiania tuara

if (year * 0.25 == int(year * 0.25)) and (year * 0.01!= int(year * 0.01) or year * 0.004 == int(year * 0.004)):
    print(year, "is a leap year.")
else:
    print(year, "is not a leap year.")




    # shevqmnat programa romelic chvens sitkvas waikitxavs palindromisebulad (ukugma marjvnidan marcxniv)
string = input("Enter a string: ")
i = 0
j = len(string) - 1


while i < j:
    if string[i] != string[j]:
        print("Not a palindrome.")
        exit()
    i += 1
    j -= 1
print("Palindrome.")




# shemovakvaninot momxmarebels ricxvi
num = int(input("Enter a number: "))
# shevqmnat programa romelic gveubneba chveni ricxvi dadebitia uarkofiti an 0i
while True:
    if num > 0:
        print("The number is positive.")
        break
    elif num < 0:
        print("The number is negative.")
        break
    else:
        print("The number is zero.")
        break




# shevqmnat programa romelic gamotvlis simaglis da wonis tanafardobas
    # shemovakvaninot momxmarebels wona da simagle
height = float(input("Enter your height in meters: "))
weight = float(input("Enter your weight in kilograms: "))

# gamovitvalot BMI
bmi = weight / (height ** 2)

print("Your BMI is: ", round(bmi, 2))

if bmi < 18.5:
    print("You are underweight.")
elif 18.5 <= bmi < 25:
    print("You are normal weight.")
elif 25 <= bmi < 30:
    print("You are overweight.")
else:
    print("You are obese.")



    # shevqmnat programa romelic uchvenebs momxmarebels nakian weliwads
# shemovakvaninot momxmarebels weli
year = int(input("Enter a year: "))

    # gamovitvalot nakiani weliwadiS
if (year // 4 == year / 4) and ((year // 100 != year / 100) or (year // 400 == year / 400)):
    print(year, "is a leap year.")
else:
    print(year, "is not a leap year.")