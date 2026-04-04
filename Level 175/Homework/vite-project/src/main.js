//first codewars
function stalinSort(array) {
  if (array.length === 0) return;
  let lastSurvivor = array[0];
  let writeIndex = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= lastSurvivor) {
      array[writeIndex] = array[i];
      lastSurvivor = array[i];
      writeIndex++;
    } else {
      console.log("Расстрелять!");
    }
  }

  array.length = writeIndex;
}


//second codewars
const powers = n => {
  let res = [], p = 1;
  while (n > 0) {
    if (n % 2) res.push(p);
    n = Math.floor(n / 2);
    p *= 2;
  }
  return res;
};









