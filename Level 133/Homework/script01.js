// 1. 
const nums = [1, 2, 3];
const doubled = nums.map(function(n) {
  return n * 2;
});
console.log(doubled); 

// 2. 
const names = ['ana', 'gio'];
const upper = names.map(function(name) {
  return name.toUpperCase();
});
console.log(upper); 

// 3. 
const numbers = [1, 2, 3];
const stringNums = numbers.map(function(num) {
  return 'რიცხვი: ' + num;
});
console.log(stringNums); 

// 4. 
const people = [{name: 'Nika'}, {name: 'Lika'}];
const namesOnly = people.map(function(person) {
  return person.name;
});
console.log(namesOnly); 

// 5. 
const items = ['apple', 'banana'];
const htmlItems = items.map(function(item) {
  return '<li>' + item + '</li>';
});
console.log(htmlItems); 
