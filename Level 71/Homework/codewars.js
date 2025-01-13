


//! first codewars

function isSortedAndHow(array) {
    let ascending = true;
    let descending = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) ascending = false;
        if (array[i] > array[i - 1]) descending = false;
    }

    if (ascending) return "yes, ascending";
    if (descending) return "yes, descending";
    return "no";
}


//! second codewars

function sort(initialArray, sortingArray) {
    let result = new Array(initialArray.length);

    for (let i = 0; i < sortingArray.length; i++) {
        result[sortingArray[i]] = initialArray[i];
    }

    return result;
}
