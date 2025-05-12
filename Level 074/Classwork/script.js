

//* first task
function Person(name, age, height, id) {
    this.name = name; 
    this.age = age;   
    this.height = height; 
    this.id = id;   
}

const person1 = new Person("gela", 25, 170, 1);
const person2 = new Person("zvezdana", 30, 180, 2);
const person3 = new Person("poliaqtori", 22, 175, 3);


console.log(person1); 
console.log(person2); 
console.log(person3); 

//* second task

function Person(name, age, height, id) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.id = id;
}

function Car(name, year, engine, horsepower, color, owner) {
    this.name = name;
    this.year = year;
    this.engine = engine;
    this.horsepower = horsepower;
    this.color = color;
    this.owner = owner;
}

const person01 = new Person("zviada", 28, 172, 1);
const person02 = new Person("jemala", 35, 160, 2);
const person03 = new Person("rostoma", 40, 185, 3);

const car1 = new Car("Pagani", 2021, "V12", 800, "Silver", person01);
const car2 = new Car("Aston Martin", 2020, "V8", 550, "Green", person02);
const car3 = new Car("Koenigsegg", 2023, "V8", 1600, "Blue", person03);

console.log(car1);
console.log(car2);
console.log(car3);
