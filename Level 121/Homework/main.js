// 1
function greet(name, callback) {
  setTimeout(function() {
    console.log("Hello " + name);
    if (callback) callback();
  }, 2000);
}

// 2
function showMessage(msg, callback) {
  setTimeout(function() {
    console.log(msg);
    if (callback) callback();
  }, 2000);
}

// 3
function squareNumbers(nums, callback) {
  let result = [];
  let done = 0;

  for (let i = 0; i < nums.length; i++) {
    setTimeout(function() {
      result[i] = nums[i] * nums[i];
      done++;
      if (done === nums.length) {
        callback(result);
      }
    }, 2000);
  }
}

// 4
function changeTextColor(color, callback) {
  setTimeout(function() {
    callback(color);
  }, 2000);
}

// 5
function askNameAndGreet() {
  let name = prompt("Enter name:");
  setTimeout(function() {
    alert("Hello " + name + ", thanks!");
  }, 3000);
}

// Example usage:
greet("Dachi", function() {
  console.log("Done greeting");
});

showMessage("Waiting done", function() {
  console.log("Done message");
});

squareNumbers([1, 2, 3], function(res) {
  console.log(res);
});

changeTextColor("blue", function(color) {
  document.body.style.color = color;
});

askNameAndGreet();
