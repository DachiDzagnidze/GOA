
correct_password = "dachi"  
attempts = 0

while True:
    password_attempt = input("Enter the password: ")
    attempts += 1
    
    if password_attempt == correct_password:
        print("Congratulations! You entered the correct password.")
        print("Number of attempts:", attempts)
        
    else:
        print("Incorrect password. Please try again.")
