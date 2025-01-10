function multiplyNumbers() {
    while (true) {
      let num1 = prompt("Enter the first number (or 'exit' to quit):");
      if (num1 === 'exit') break;
  
      let num2 = prompt("Enter the second number (or 'exit' to quit):");
      if (num2 === 'exit') break;
  
      let result = Number(num1) * Number(num2);
      if (isNaN(result)) {
        console.log("Invalid input. Please enter numbers.");
      } else {
        console.log("The product is: " + result);
      }
    }
  
    console.log("Exiting the program...");
  }
  
  multiplyNumbers();
  