//! first task
let userInput = prompt("შემოიტანეთ სტრინგი: ");
let startIndex = parseInt(prompt("შემოიტანეთ ინდექსი: "));

let slicedResult = userInput.slice(startIndex);
console.log("ამოჭრილი სტრინგი:", slicedResult);



//! second task
let sentence = prompt("შემოიტანეთ წინადადება: ");
let reversedWordsResult = "";
let word = "";

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
        word = sentence[i] + word;
    } else {
        reversedWordsResult += word + " ";
        word = "";
    }
}

reversedWordsResult += word;
console.log("შემოტრიალებული სიტყვები:", reversedWordsResult);
