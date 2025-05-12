
//! first classwork
const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    color: 'blue',
    engineType: 'hybrid'
};

console.log(car.model); 

//! second classwork


const numbers = {
    row_0: [2, 4, 6, 8, 10],  
    row_1: [1, 3, 5, 7, 9]    
};

for (let i = 0; i < numbers.row_0.length; i++) {
    console.log(`row_0 element: ${numbers.row_0[i]}, row_1 element: ${numbers.row_1[i]}`);
}


//! third classwork

function createArrayFromObject(obj) {
    const { quantity, element } = obj; 
    const resultArray = [];
    
    for (let i = 0; i < quantity; i++) {
        resultArray.push(element);
    }
    
    return resultArray;
}


const inputObject = {
    quantity: 5,
    element: 'apple'
};

console.log(createArrayFromObject(inputObject));

