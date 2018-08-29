const Array = require('./array-class');

function main() {
  Array.SIZE_RATIO = 3;

  // create an instance of the array class
  let arr = new Array();

  // add an item to the array
  arr.push(3);

  // The length of this array is 1 as we are only pushing a single value, the capacity is 3 due to the size ration, and the address of our array is 0 as it is the first in memory.

  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  // After adding the five additional push methods, our length increases to 6 and the capacity increases to 12 (add 3, 3 + 1 = 4, 4 * 3 = 12). The address of this array has moved to 3 since there was not enough allocated space and had to be copied and moved to the next available (and accomodating) space in our memory.

  arr.pop();
  arr.pop();
  arr.pop();

  // After three pops, the length will be reduced to 3 as we are removing three items from the array. The capacity will remain 12 and the address (ptr) will still begin at 3 since no more space had to be added/it didn't have to be copied anywhere.

  console.log(arr);

  // print the first item in the array
  console.log(arr.get(0));

  // empty the array - REMEMBER! It shifts down every time so you need to keep deleting at position 0 rather than deleting 0, 1, 2
  arr.remove(0);
  arr.remove(0);
  arr.remove(0);

  // add a single item 'tauhida' to the array
  arr.push("tauhida");

  // print that item
  console.log(arr.get(0));

  // The result of printing at the first postion returns as NaN - due to the fact that this current array was housing explicitly numbers, there's a chance it could have been typecast and therefore does not like the string that was inserted into it.

  console.log(arr);
}

// the purpose of the resize function in our array class is to copy over the data to a new area of memory where there is enough space to house it when there is no space in its current position - additionally, it's there to throw an error when there is no more memory to work with or insignificant space.

main();
