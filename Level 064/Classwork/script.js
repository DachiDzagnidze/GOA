


function checkNumbers(num1, num2) {
    let isOdd = num1 % 2 !== 0;
    let isGreater = num1 > num2;
    let isEven = num2 % 2 === 0;

    if (isOdd && isGreater && isEven) {
        return true;
    }
    return false;
}

console.log(checkNumbers(5, 4));
console.log(checkNumbers(3, 5));
