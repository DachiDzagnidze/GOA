def manual_len(name,list):
    print(len(name))
    num = 0
    for i in range(1,len(list)+1):
        num = num + i
    print(i)



manual_len("levani",[0,3,8])




correct_answer = 7


user_guess = 0

while user_guess != correct_answer:

    user_guess = int(input("Guess a number between 1 and 10: "))
    if user_guess == correct_answer:
        print(" Congratulations! You guessed it right!")
    else:
        print(" Sorry, that's not correct. Try again!")

print("Thanks for playing!")
