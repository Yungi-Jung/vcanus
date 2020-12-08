const array = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let count = array.length / 2;
while (count--) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      if (
        array[i] <= array[i - 1] &&
        array[i] <= array[i + 1] &&
        array[i] <= array[i - 10] &&
        array[i] <= array[i + 10]
      ) {
        array[i] += 1;
      }
    }
  }
}

console.log(array);