
#! task 1

masivi = [10, 20, 30, 40, 50]

# დავბეჭდოთ მე-2 და მე-4 ელემენტები
print(masivi[1]) 
print(masivi[3])  


#! task 2

N = int(input("sheikvanet elementebis raodenoba: "))

# შევიყვანოთ ელემენტი
masivi = []
i = 0
while i < N:
    masivi.append(int(input("sheikaneba ricxvi: ")))
    i += 1

# დავბეჭდოთ კენტი ინდექსის ელემენტები
i = 1
while i < N:
    print(masivi[i])  
    i += 2


#! task 3

masivi = []

print("sheikvanet 10 ricxvi:")
i = 0
while i < 10:
    masivi.append(int(input("sheikvanet ricxvi: ")))
    i += 1

# დავბეჭდოთ გაორმაგებული რიცხვები
i = 0
while i < 10:
    print(masivi[i] * 2)
    i += 1

#! task 4

N = int(input("sheikvanet elementebis raodenoba: "))


masivi = []
i = 0
while i < N:
    masivi.append(int(input("sheikvaneba ricxvi: ")))
    i += 1

# დავბეჭდოთ შებრუნებული მასივი
i = N - 1
while i >= 0:
    print(masivi[i])
    i -= 1

#! task 5

N = int(input("sheikvanet elementebis raodenoba: "))

# შეიყვანეთ ელემენტები
masivi = []
i = 0
while i < N:
    masivi.append(int(input("sheikvaneba ricxvi: ")))
    i += 1

# გავცვალოთ პირველი და ბოლო ელემენტები
tmp = masivi[0]
masivi[0] = masivi[N-1]
masivi[N-1] = tmp

# დავბეჭდოთ ახალი მასივი
i = 0
while i < N:
    print(masivi[i])
    i += 1
