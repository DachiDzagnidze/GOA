// Task 1
function isVow(a) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const n = a[i];
        if (n === 97) result.push('a');
        else if (n === 101) result.push('e');
        else if (n === 105) result.push('i');
        else if (n === 111) result.push('o');
        else if (n === 117) result.push('u');
        else result.push(n);
    }
    return result;
}

// Task 2
function whoIsPaying(name) {
    let result = [];
    result.push(name);

    if (name.length > 2) {
        let firstletter = name[0];
        let secondletter = name[1];
        let shortName = firstletter + secondletter;
        result.push(shortName);
    }
    return result;
}

// Task 3
function nextId(ids) {
    let i = 0;
    while (ids.includes(i)) {
        i++;
    }
    return i;
}
