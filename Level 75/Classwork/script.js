function BankAccount(owner, balance) {
    this.owner = owner;
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
        console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
    };

    this.withdraw = function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${this.owner} withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log(`${this.owner} does not have enough funds.`);
        }
    };

    this.showBalance = function() {
        console.log(`${this.owner}'s balance: ${this.balance}`);
    };
}

const account1 = new BankAccount("Lasha", 1000);


account1.deposit(200);


account1.withdraw(500);


account1.showBalance();


//! second task

class Animal {
    constructor(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
    }
  
    makeSound() {
      console.log(`${this.name} gamoscems xmas.`);
    }
  }

  const lion = new Animal("lomi", 5, "oqrosferi");
  lion.makeSound();  
  