while True:
    try:
        num1 = float(input("შეიყვანე პირველი რიცხვი: "))
        num2 = float(input("შეიყვანე მეორე რიცხვი: "))
        print(f"ნამრავლი არის: {num1 * num2}")
    except ValueError:
        print("გთხოვთ შეიყვანოთ რიცხვები.")
        continue

    command = input("თუ გსურთ პროგრამიდან გასვლა, აკრიფეთ 'exit', წინააღმდეგ შემთხვევაში ნებისმიერი სხვა რამ: ")
    if command.lower() == 'exit':
        print("პროგრამა დასრულდა.")
        break
