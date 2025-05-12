//! first task
const enteredTexts = [];

function checkText() {
  const text = prompt("Enter some text:");
  if (enteredTexts.includes(text)) {
    alert("You've already entered this text. Please try a different one.");
  } else {
    enteredTexts.push(text);
    alert("Text saved.");
}
//* second way
function NoRepeat() {
  let array = [];

  while (true) {
    let userInput = prompt("Please enter text:");

    let alreadyExists = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === userInput) {
        alreadyExists = true;
        break;
      }
    }

    if (alreadyExists) {
      alert("You have already entered this text. Please try again.");
    } else {
      array.push(userInput);
      alert("New text added.");
    }
  }
}

NoRepeat();

checkText();

//! second task

function toZeroes(n){  
  let divisor = 10 ** (String(n).length - 1)

  while(n % divisor !== 0){ 
    n++
    console.log(n)
  }

}
toZeroes(127)



//! third task

function promptPassword() {
  const correctPassword = "12348765";
  let password;

  do {
    password = prompt("Enter the password:");
  } while (password !== correctPassword);

  alert("Correct password entered. Access granted.");
}

promptPassword();

}