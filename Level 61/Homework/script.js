

//! FIRST TASK
function manualFilter(array, ...elementsToRemove) {
    let result = []; // masivi romeli heinaxavs elementebs

    for (let i = 0; i < array.length; i++) { // masivis kvela elemets gadauarot am ciklit
        let shouldRemove = false; // es amowmebs amosashlelia tuara elementi

        // vamowmebt mmdinare elementi shedis tuara `elementsToRemove` masivshi
        for (let j = 0; j < elementsToRemove.length; j++) {
            if (array[i] === elementsToRemove[j]) { // tu emtxveva elemets unda waishalos
                shouldRemove = true; 
                break; 
            }
        }

        // tu elements r vshlit vamatebt resultshi
        if (!shouldRemove) {
            result.push(array[i]);
        }
    }
    return result; 
}



//! SECOND TASK

function manualSort(array) {
    let n = array.length; // მmasivis sigrdze 

    for (let i = 0; i < n - 1; i++) { // gadvavuvlit kvela elements masivshi
        for (let j = 0; j < n - i - 1; j++) { // elemets vamowmebt wkvil wkvilad
            if (array[j] > array[j + 1]) { // tu sawkisi elmenti ufro didia vidre meore vucvlit elmentebs adgils
                // sheucvalot
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array; 
}

