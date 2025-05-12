

function flattenAndJoin(matrix) {
    const flattened = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            flattened.push(matrix[i][j]);
        }
    }

    return flattened.join(',');
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(flattenAndJoin(matrix));