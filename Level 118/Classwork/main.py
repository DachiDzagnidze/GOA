import random

def create_groups(members, size):
    random.shuffle(members)
    groups = []
    for i in range(0, len(members), size):
        groups.append(members[i:i+size])
    return groups

class Card:
    def __init__(self, pin, balance, facts):
        self.pin = pin
        self.balance = balance
        self.facts = facts

    def balance_info(self):
        return f"Balance: {self.balance} ₾"

    def deposit(self, amount):
        self.balance += amount
        return f"Added {amount} ₾. New balance: {self.balance} ₾"

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        return f"Withdrew {amount} ₾. Remaining balance: {self.balance} ₾"

    def about(self):
        return "Facts about me: " + ", ".join(self.facts)

names = ["Lasha", "Nika", "Tamari", "Ana", "Mari", "Giorgi", "Levan", "Eka"]
groups = create_groups(names, 3)
for idx, group in enumerate(groups, 1):
    print(f"Group {idx}: {group}")

card = Card(1234, 150, ["I love programming", "I am a student", "I have a dog"])
print(card.balance_info())
print(card.deposit(50))
print(card.withdraw(70))
print(card.about())
