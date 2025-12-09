// DAY 118

class Person {
    #name
    #age

    constructor(name, age) {
        this.#name = name
        this.#age = age
    }

    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
    }

    getAge() {
        return this.#age
    }

    setAge(age) {
        this.#age = age
    }
}

class ReadOnlyExample {
    #id

    constructor(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }
}

class BankAccount {
    #balance

    constructor() {
        this.#balance = 0
    }

    getBalance() {
        return this.#balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
        }
    }
}

const acc = new BankAccount()
acc.deposit(100)
console.log(acc.getBalance()) // 100