
#! BATONI MATE DOLIDZES 15 DAVALEBA

#! for loop

for i in range(21):
    print(i)



for i in range(1,11):
    print(i)



for i in range(0, 101, 2):
    print(i)



# momxmarebels shemovataninot nebismieri ricxvi
num = int(input("Enter a number: "))

#  jamis inicialeba 0 mde
total_sum = 0

#  gamoviyenot for loop rata gamovtvalot yvela ricxvis jami sheyvanis ricxvamde
for i in range(1, num + 1):
    total_sum += i

# davprintot shedegi
print("The sum of all numbers up to", num, "is:", total_sum)







# gamovienot for loop, rom gaimeorot 5-dan 50-mde 5-iani nabijit
for i in range(5, 51, 5):
    print(i)



#! while loop

# mivcet cvlads mnishvneloba
num = 0

# gavameorot cvladi sanam 20s ar miagwevs
while num <= 20:
    print(num)  # amovbewdot mimdinare ricxvi romelic luwia
    num += 2




# shemovikvanot cvladebi
num = 1
sum_numbers = 0

# gavameorot loop i sanam ar miagwevs 10 s
while num <= 10:
    sum_numbers += num  #davamatot num ricxvebis jams
    num += 1  # davamatot 1 kovel iteraciaze

# davprintot jami ricxvebis 1 dan 10 mde
print("The sum of numbers from 1 to", num, "is:", sum_numbers)




# shevqmnat swori pasuxi
correct_answer = 7

# shemovikvanot cvladi rom daitvalos ramdenjer cada momxmarebelma ricxvis gamocnoba
user_guess = 0

# gamovikenot while loop rom gaagrdzelos tavidan momxmareblistvis kitxva sanam ar dawers swor pasuxs
while user_guess != correct_answer:
    # Ask the user to guess a number between 1 and 10 vkitxot momxmarebels ricxvi 1 dan 10 mde
    user_guess = int(input("Guess a number between 1 and 10: "))

    #  shevamowmot sworia tuara momxmareblismier chawereili ricxvi
    if user_guess == correct_answer:
        print(" Congratulations! You guessed it right!")
    else:
        print(" Sorry, that's not correct. Try again!")

print("Thanks for playing!")






#? es davaleba ver gavige da AI davixmare
# Define the original list of numbers
numbers = [1, 2, 3, 4, 5]

# Create an empty list to store the doubled numbers
doubled_numbers = []

# Initialize a counter variable to 0
i = 0

# Use a while loop to iterate over the original list
while i < len(numbers):
    # Double the current number and append it to the new list
    doubled_numbers.append(numbers[i] * 2)
    # Increment the counter variable
    i += 1

# Print the original list
print("Original list:", numbers)

# Print the new list with doubled numbers
print("Doubled list:", doubled_numbers)




# shevqmnat swori pasuxi
correct_password = "password123"  
# shevqmnat cvladi romelic dawers tu ramdenjer cada momxmarebelma parolis shekvana
attempts = 0


# ganmeordes parolis tavidan chaweris motxovna sanam swor parols ar sheikvans momxmarebeli
while True:
    password_attempt = input("Enter the password: ")
    attempts += 1

#  gamovikenot if da else statmants
    if password_attempt == correct_password:
        print("Congratulations! You entered the correct password.")
        print("Number of attempts:", attempts)
        break


    else:
        print("Incorrect password. Please try again.")


#! if--else


# shemovitanot import datatime
from datetime import datetime

# mivigot axlandeli dro
current_hour = datetime.now().hour

# gamovikenot if da else statmatebi rom ghamoitanos "good morning" an "Good afternoon"
if current_hour < 12:
    print("Good morning!")
else:
    print("Good afternoon!")







# shevqmnat cvladi romelshuidac momxmarebeli sheikvans nebismier ricxvs 1 dan 10 mde
num = input("Enter number 1 to 10")  

# gamovikenot if da else statmentebi rom sheamowmos ricxvi luwia tu kenti
if (num / 2) * 2 == num:
    print("Even")
else:
    print("Odd")




#  momxmarebels shemovataninot amindis temperatura

temperature = float(input("Enter the temperature in Celsius: "))



#  shevamowmot tu temperature magalia 30 ze gamotans "its hot outsiode" tu naklebia "its not hot outside"
if temperature > 30:
    print("It's hot outside!")
else:
    print("It's not too hot.")




# momxamrebeli shemoitans gamocdis(testis) qulas
score = float(input("Enter the exam score: "))

# shevamowmot tu momxmareblis qula metia 50 ze anu chaabara da tu araris meti 50 ze chaiwra
if score >= 50:
    print("You passed!")
else:
    print("You failed.")



# shemovataninot momxmarebels tavisi sasaki
age = int(input("Enter your age: "))

# if da esle statmentebis daxmarebit tu momxmareblis asaki metia 13 ze da naklebia 19 ze mashin is teenageria sxva shemtxvevashi gamoitans your a not teenager
if 13 <= age <= 19:
    print("You are a teenager!")
else:
    print("You are not a teenager.")