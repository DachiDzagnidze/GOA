// 1. 
const names = ['Dachi', 'Nino', 'Luka'];
names.forEach(function(name) {
  console.log(name);
});

// 2. 
names.forEach(function(name, index) {
  console.log(index + ': ' + name);
});

// 3. 
let result = '';
names.forEach(function(name) {
  result += name + ' ';
});
console.log(result); 

// 4. 
const users = [{name: 'Ana'}, {name: 'Gio'}];
users.forEach(function(user) {
  user.loggedIn = true;
});
console.log(users); 

// 5. 
const numbers = [1, 2, 3, 4];
const evens = [];
numbers.forEach(function(num) {
  if (num % 2 === 0) {
    evens.push(num);
  }
});
console.log(evens); 
