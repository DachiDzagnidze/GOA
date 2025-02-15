// 1) unshift
let arr1 = [2, 3, 4];
arr1.unshift(1); // masivis dasawkishi emateba 1
console.log("unshift:", arr1);

// 2) shift
let arr2 = [1, 2, 3];
let firstElement = arr2.shift(); // shlis pirvel elements
console.log("shift:", arr2); 


// 3) splice
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 1, 'a', 'b'); //  moere indexze washlis 1 elements da daamatebs 'a's da 'b'es
console.log("splice:", arr3); 

// 4) slice
let arr4 = [1, 2, 3, 4, 5];
let newArr4 = arr4.slice(1, 4); // amowris elementebs 1 dan 4 amde
console.log("slice:", newArr4);

// 5) concat
let arr_1 = [1, 2];
let arr_2 = [3, 4];
let combinedArr = arr_1.concat(arr_2); // aertianebs 2 masivs
console.log("concat:", combinedArr);

// 6) sort
let arr6 = [3, 1, 4, 2];
arr6.sort(); //alagebs elementebs zrdis mixedvit
console.log("sort:", arr6); 

// 7) reverse
let arr7 = [1, 2, 3, 4];
arr7.reverse(); // areversebs masivs shemoatrialebs
console.log("reverse:", arr7); 

// 8) join
let words = ["Hello", "World"];
let message = words.join(" "); //join aertienebs arraishi calkeul elementebs da svavs orives ert elementad (" " space dashorebit)
console.log(message); 
