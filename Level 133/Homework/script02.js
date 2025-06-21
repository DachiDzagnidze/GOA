// 1. 
const nums = [1, 2, 3];
const sum = nums.reduce(function(total, current) {
  return total + current;
}, 0);
console.log(sum); 

// 2. 
const multiply = nums.reduce(function(total, current) {
  return total * current;
}, 1);
console.log(multiply); 

// 3.
const names = ['Dachi', 'Nino'];
const allNames = names.reduce(function(acc, name) {
  return acc + ' ' + name;
}, '');
console.log(allNames);

// 4. 
const numbers = [5, 12, 7];
const max = numbers.reduce(function(maxNum, current) {
  return current > maxNum ? current : maxNum;
}, numbers[0]);
console.log(max); 

// 5. 
const fruits = ['apple', 'banana', 'apple', 'orange'];
const count = fruits.reduce(function(obj, fruit) {
  if (!obj[fruit]) {
    obj[fruit] = 1;
  } else {
    obj[fruit]++;
  }
  return obj;
}, {});
console.log(count);
