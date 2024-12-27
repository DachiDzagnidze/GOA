


function removeElements(arr1, arr2) {
    return arr1.filter(element => !arr2.includes(element));
}


const Array1 = [1, 2, 3, 4, 5];
const Array2 = [2, 4];

const result = removeElements(Array1, Array2);
console.log(result); 
