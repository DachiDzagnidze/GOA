// Codewars Task N1: XOR Logical Operator
function xor(a, b) {
  return a !== b;
}

// Codewars Task N2: Find the Nth Even Number
function nthEven(n) {
  return 2 * (n - 1);
}

// Codewars Task N3: Combat Function (Health Reduction)
function combat(health, damage) {
  if (health > damage) return health - damage;
  return 0;
}

// Codewars Task N4: Get Real Floor (European Floor System)
function getRealFloor(n) {  
  if (n <= 0) return n;
  if (n < 13) return n - 1;
  return n - 2;
}

// Codewars Task N5: Name Shuffler (Swap First and Last Name)
function nameShuffler(str) {
  let spacePos = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      spacePos = i;
      break;
    }
  }
  let result = '';
  for (let i = spacePos + 1; i < str.length; i++) {
    result += str[i];
  }
  result += ' ';
  for (let i = 0; i < spacePos; i++) {
    result += str[i];
  }
  return result;
}
