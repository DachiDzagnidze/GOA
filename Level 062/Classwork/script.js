

function findDifferentElements(arr1, arr2) {

    const uniqueToArr1 = arr1.filter(element => !arr2.includes(element));//pivel masivshi is elementebi romlebic ar gvxvdeba meoreshi

    const uniqueToArr2 = arr2.filter(element => !arr1.includes(element));//  meore masivshi is elementebi romlebic ar gvxvdeba pirvelshi
    
    return uniqueToArr1.concat(uniqueToArr2);// gavaertianot rom davabrunot kvela gansxvavebuli ricxvi
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const result = findDifferentElements(array1, array2);
console.log(result); 






