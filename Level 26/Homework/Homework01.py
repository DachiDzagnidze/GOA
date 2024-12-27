
#! 2) .append(), .pop(), .insert() მაგალითები

# შევქმნათ სია
my_list = [4, 3, 2]
# .append() - სიას ბოლოში ამატებს ელემენტს.
my_list.append(1)  
print(my_list)


# .pop() - ს დან აგდებს ელემენტს.
items = [5, 6, 7]  # სია: [5, 6, 7]
items.pop(2)  # შლის 7-ს იმიტომ რომ 7-ი მეორე ინდექსზეა
print(items)  


# .insert() - სიის გარკვეულ პოზიციაზე ამატებს ელემენტს.
my_list.insert(1, 9)  # ინდექსზე 1 ამატებს 9-ს, შედეგი: [1, 9, 2, 3]
print(my_list)

#* შევქმნათ სია
example_list = ["watermelon" , "mango" , "melon", "strawberry", "pineapple"]

#* 1. სამჯერ ვამატებთ ელემენტებს .append()-ის გამოყენებით
example_list.append("apple")
example_list.append("cherry")
example_list.append("banana")
example_list.append("mango")
print("damatebis shemdeg:", example_list)  

#* 2. სამჯერ ვშლით ელემენტებს .pop()-ის გამოყენებით
example_list.pop()
example_list.pop()
example_list.pop()
print("amogdebis shemdeg:", example_list)  

#* 3. სამჯერ ვამატებთ ელემენტებს სხვადასხვა პოზიციაზე .insert()-ის გამოყენებით
example_list.insert(0, "orange")
example_list.insert(1, "grape")
example_list.insert(1, "kiwi")  # პირველ ინდექსზე ვამატებთ kiwi-ს, grape გადავა მეორე ინდექსზე
print("chasmis shemdeg:", example_list) 
