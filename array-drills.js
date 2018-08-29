const Array = require('./array-class');

function main() {
  Array.SIZE_RATIO = 3;

  // create an instance of the array class
  let arr = new Array();

  // add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
}

main();

// The length of this array is 1 as we are only pushing a single value, the capacity is 3 due to the size ration, and the address of our array is 0 as it is the first in memory.

// After adding the five additional push methods, our length increases to 6 and the capacity increases to 12 (add 3, 3 + 1 = 4, 4 * 3 = 12). The address of this array has moved to 3 since there was not enough allocated space and had to be copied and moved to the next available (and accomodating) space in our memory.
