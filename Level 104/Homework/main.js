const arr = [1, 2, 3];
const [a, b, c] = arr;

const person = { name: "Alice", age: 25 };
const { name, age } = person;

const { name: userName, age: userAge } = person;

const colors = ["red", "green", "blue"];
const [firstColor, , thirdColor] = colors;

const users = [
  { id: 1, email: "one@mail.com" },
  { id: 2, email: "two@mail.com" }
];
for (const { id, email } of users) {
  console.log(id, email);
}

const [first, ...rest] = [10, 20, 30, 40];

const numbers = [1, 2, 3, 4, 5];
const [firstNum, , , , lastNum] = numbers;

const products = [
  { name: "Book", price: 20 },
  { name: "Pen", price: 5 },
  { name: "Laptop", price: 1000 }
];
const expensive = products.filter(({ price }) => price > 100);

const mixed = [
  42,
  { type: "fruit", name: "apple" },
  "hello",
  { type: "vehicle", name: "car" }
];
const [, { name: fruitName }, , { name: vehicleName }] = mixed;

function manualDestructing(obj) {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(obj[key]);
    }
  }
  return result;
}

const data = { x: 10, y: 20, z: 30 };
const values = manualDestructing(data);
