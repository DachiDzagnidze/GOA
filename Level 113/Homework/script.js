class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get initials() {
        return `${this.firstName[0]}${this.lastName[0]}`;
    }
}

const user = new User("Luka", "Beridze");
console.log(user.initials);

class Human {
    constructor(age) {
        this.age = age;
    }

    get ageInMonths() {
        return this.age * 12;
    }
}

const human = new Human(20);
console.log(human.ageInMonths);

class Citizen {
    constructor(age) {
        this.age = age;
    }

    get isRetired() {
        return this.age >= 60;
    }
}

const citizen = new Citizen(61);
console.log(citizen.isRetired);

class Item {
    constructor(price) {
        this.price = price;
    }

    get formattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
}

const item = new Item(149.9);
console.log(item.formattedPrice);

class SaleItem {
    constructor(price, discount) {
        this.price = price;
        this.discount = discount;
    }

    get discountPrice() {
        return this.price * (1 - this.discount / 100);
    }
}

const saleItem = new SaleItem(300, 15);
console.log(saleItem.discountPrice);
