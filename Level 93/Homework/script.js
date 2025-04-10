// 1. Lambda function for greeting
const greetUser = name => `Hello ${name}!`;
console.log(greetUser("Name"));

// 2. Doubling list values with map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
console.log(doubled);

// 3. Filtering multiples of 5
const listn = [1, 3, 5, 6, 7, 10, 15, 21, 25.5, 30, 101, 105];
const multiplesOf5 = listn.filter(x => x % 5 === 0);
console.log(multiplesOf5);

// 4. Creating Set and explanation
const setn = new Set(["Goa", "Novatori", "Stem", 123, true, 1, false, 0]);
console.log(setn);