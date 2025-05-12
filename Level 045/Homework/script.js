

//! 1) შევქმნათ ფუნქცია რომელიც ორ გადმოცემულ რიცხვს ამატებს, ამრავლებს, აკლებს ( 3 )

function calculate(a, b) {
    return {
      sum: a + b,
      multiply: a * b,
      subtract: a - b
    };
  }
  
  console.log(calculate(10, 5));  



//! 2) შევქმნათ ფუნქცუა რომელიც გადმოცემული სტრინგის პირველ ასოს აბრუნებს
    
function getFirstChar(str) {
        return str.charAt(0);
    }
    
    console.log(getFirstChar("Hello"));  

//! 3) შევქმნათ ფუნქცია რომელიც შეყვანილი რიცხვის კვადრატს დააბრუნებს

function square(num) {
    return num * num;
  }
  
  console.log(square(4));  

//! 4) შევქმნათ ფუნქცუა რომელიც გადაცემულ htmlის ელემენტს ფერს შეუცვლის წითლად

function changeColorToRed(element) {
    element.style.color = 'red';
  }

//! 5) შევქმნათ ფუნქცია რომელიც ფადაცემულ html ელემენტს ტექსტს შეუცვლის.

function changeText(element, newText) {
    element.innerText = newText;
  }
  

  
  
  
  