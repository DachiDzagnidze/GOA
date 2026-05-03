//1
function peakAndValley(arr) {
  const res = [];

  for (let i = 3; i < arr.length - 3; i++) {
    const neighbors = [
      arr[i - 3], arr[i - 2], arr[i - 1],
      arr[i + 1], arr[i + 2], arr[i + 3]
    ];

    const max = Math.max(...neighbors);
    const min = Math.min(...neighbors);

    if (arr[i] > max || arr[i] < min) {
      res.push(arr[i]);
    }
  }

  return res;
}
//2
function flyBy(lamps, drone) {
  const dronePos = drone.indexOf('T');
  
  return lamps
    .split('')
    .map((lamp, i) => i <= dronePos ? 'o' : 'x')
    .join('');
}

//3 
function toggleBit(n, position) {
  return n ^ (1 << position);
}

function setBit(n, position) {
  return n | (1 << position);
}

function clearBit(n, position) {
  return n & ~(1 << position);
}

function isBitSet(n, position) {
  return (n & (1 << position)) !== 0;
}

function setMultipleBits(n, mask) {
  return n | mask;
}

function clearMultipleBits(n, mask) {
  return n & ~mask;
}

function toggleMultipleBits(n, mask) {
  return n ^ mask;
}

//4

function listToArray(list) {
  const result = [];
  let current = list;

  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

// 5

function perimeterSequence(a, n) {
  return 4 * a * n;
}