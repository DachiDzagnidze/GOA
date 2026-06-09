// Level 194 — Big O Notation


// 1)
/*
big o notation უყურებს თუ როგორ იზრდება input-ი  და როგორ დაბლდება
performance. ანუ  big o notation აკონტროლებს inputსა და timeის შედარებას


Big O გამოიყენება იმისთვის, რომ გავიგოთ რამდენად ეფექტურია ალგორითმი.
/*



 2)

1. O(1)
2. O(log n)
3. O(n)
4. O(n log n)
5. O(n²)
   */

// 3) 

for(let i = 0; i < n; i++) {
console.log(i);
}

// O(n)

// 4) 

for(let i = 0; i < n; i++) {
for(let j = 0; j < n; j++) {
console.log(i, j);
}
}

// O(n²)

// 5) 

let i = 1;

while(i < n) {
console.log(i);
i *= 2;
}

// O(log n)

// 6) 

for(let i = 0; i < n; i++) {
console.log(i);
}

for(let j = 0; j < n; j++) {
console.log(j);
}

// O(n)

// 7) 

for(let i = 0; i < n; i++) {
for(let j = 0; j < i; j++) {
console.log(i, j);
}
}

// O(n²)

// 8) ფუნქცია O(1) სირთულით

function getFirst(arr) {
return arr[0];
}

// O(1)

// 9) ფუნქცია, რომელიც მასივის ყველა ელემენტს დაბეჭდავს

function printArray(arr) {
for(let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}
}




// O(n)

// 10) ფუნქცია, რომელიც მასივში ყველაზე დიდ რიცხვს იპოვის

function findMax(arr) {
let max = arr[0];

for(let i = 1; i < arr.length; i++) {
if(arr[i] > max) {
max = arr[i];
}
}

return max;
}

// O(n)
