function checkAge() {
    const age = parseInt(prompt("Enter your age:"));
    const result = age >= 18 ? "You are 18 or older" : "You are younger than 18";
    console.log(result);
  }
  
  function checkNumber() {
    const number = parseInt(prompt("Enter a number:"));
    const result = number > 10 ? "Greater than 10" : 
                   number < 10 ? "Less than 10" : 
                   "Equal to 10";
    console.log(result);
  }
  
  function compareNumbers(num1, num2) {
      const result = num1 > num2 ? `${num1} is greater than ${num2}` :
                     num1 < num2 ? `${num2} is greater than ${num1}` :
                     "Equal";
      console.log(result);
  }
  
  // Example usage
  checkAge();
  checkNumber();
  compareNumbers(5, 10);
  compareNumbers(15, 3);
  compareNumbers(7, 7);





  //! codewars 
  
  function fakeBin(x) {
    let result = '';
    for (let i = 0; i < x.length; i++) {
      result += x[i] < 5 ? '0' : '1';
    }
    return result;
  }