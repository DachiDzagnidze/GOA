// Task 1: Count odd numbers below n
function oddCount(n) {
    return Math.floor(n / 2);
}

// Task 2: Check if all elements in the array are less than or equal to the limit
function smallEnough(array, limit) {
    for (let num of array) {
        if (num > limit) {
            return false;
        }
    }
    return true;
}

// Task 3: Determine if members are "Senior" or "Open"
function openOrSenior(data) {
    const result = [];
    for (let member of data) {
        const [age, handicap] = member;
        if (age >= 55 && handicap > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }
    return result;
}

// Task 4: Calculate printer error rate
function printerError(s) {
    let errors = 0;
    for (let c of s) {
        if (c < 'a' || c > 'm') {
            errors++;
        }
    }
    return errors + "/" + s.length;
}

// Task 5: Convert digits to binary based on threshold
function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
        result += x[i] < 5 ? '0' : '1';
    }
    return result;
}
