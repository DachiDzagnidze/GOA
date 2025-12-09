//! 1) შექმენით მანუალური ფილტრის ფუნქცია ( ფუნქციას გადაეცემა მასივი და ელემენტ(ები) რომელიც უნდა ამოიჭოს ამ მასივიდან )
//! 2) შექმენთ მანუალური სორტირების ფუნქცია




function removeItems(inputArray, ...unwatedItems) { 
    let outputArray = []

    for(let item of inputArray) {   
        if (!unwatedItems.includes(item)) { 
            outputArray.push(item);
            
        }
    }
    return outputArray;
}
let storage = [5, 10, 15, 20, 25];
console.log(removeItems(storage(5, 10)))

//#####################################################################
function manualFilter(array, ...elementsToRemove) {
    let result = []; 

    for (let i = 0; i < array.length; i++) { 
        let shouldRemove = false; 


        for (let j = 0; j < elementsToRemove.length; j++) {
            if (array[i] === elementsToRemove[j]) { 
                shouldRemove = true; 
                break; 
            }
        }

        if (!shouldRemove) {
            result.push(array[i]);
        }
    }
    return result; 
}


function manual_sort(arr){  
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){  
            if(arr[i] > arr[j]){
            let OldValue = arr[i]  
            arr[i] = arr[j];
            arr[j] = OldValue;}
        }  

    }
    return arr
}
console.log(manual_sort([10, 15, 34, 12, 65]))