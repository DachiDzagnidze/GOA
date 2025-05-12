


#! first task
user_input = input("შემოიტანეთ სტრინგი: ")
start_index = int(input("შემოიტანეთ ინდექსი: "))

result = user_input[start_index:]
print("ამოჭრილი სტრინგი:", result)

#! second task
sentence = input("შემოიტანეთ წინადადება: ")
result = ""
word = ""

for char in sentence:
    if char != " ":
        word = char + word  
    else:
        result += word + " " 
        word = ""  

result += word  

print("შემოტრიალებული წინადადება: ", result)

#! third task

x = "Hello World"

print(x[2:6:1])  #? 2 → დაწყების ინდექსი 
                 #? 6 → დამთავრების ინდექსი
                 #? 1 → რამდენით გადაადგილდება
