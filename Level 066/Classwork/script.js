



function make2DarrayEven(array) {
    return array.flat().filter(num => num % 2 === 0);
}

// Example usage
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(make2DarrayEven(arr)); 
