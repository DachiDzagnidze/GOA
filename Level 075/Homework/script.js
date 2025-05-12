
//! manqanis constructori

class Car {
    constructor(brand, model, year, engineVolume) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineVolume = engineVolume;
    }

    getDescription() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
}

const myCar = new Car("Koenigsegg", "Jesko", 2022, 5.0);
console.log(myCar.getDescription()); 


//! wignis constructori

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.pagesPerDay = (pages / 7).toFixed(2);
}

const wigni = new Book("nu moklav jafaras", "Harper Lee", 200); 
console.log(`unda wavikitxot ${wigni.pagesPerDay} gverdi dgeshi rom tavamtavrot wigni ert kvirashi.`);

//! sportsmanis constructori

const athlete = {
    name: "Dachi",
    sport: "gym",
    trainingHours: 3,
    weeklyTrainingIncrease() {
        return (this.trainingHours * 8.4).toFixed(2);
    }
};

console.log(`${athlete.name}m unda ivarjishos ${athlete.weeklyTrainingIncrease()} saati kvirashi rom gaizardos misi shedegi 20%it.`);
