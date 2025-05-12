
function getUniqueElements(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let isUnique = true;

        for (let j = 0; j < array.length; j++) {
            if (i !== j && array[i] === array[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            result.push(array[i]);
        }
    }

    return result;
}
