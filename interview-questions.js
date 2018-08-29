// push(), pop(), shift(), unshift(), Math.

// 1. URLify a string

function urlify (str) {
  // loop over it once like an array, forEach does not work
  // target all whitespace in the string
  // change all whitespace to %20

  let answer = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      answer += '%20';
    } else {
      answer += str[i];
    }
  }
  console.log(`This is the ${answer}`);

  // let answer = '';
  // [...str].forEach(letter => {
  //   console.log(letter);
  //   if (letter === ' ') {
  //     letter = '%20';
  //     letter.trim();
  //     console.log(letter);
  //   }
  //   answer += letter;
  // });
  // console.log(`This is the ${answer}`);
}

urlify('hello world');

// 2. Filtering an array

function filterArray(arr) {
  let newArray = [];
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // compare #'s to 5
    // remove if 5
    if (arr[i] >= 5) {
      newArray.push(arr[i]);
    } else {
      // return if not
    }
  }
  console.log(newArray);
}

filterArray([1,2,3,4,5,6,7,8]);

// 3. Max sum in the array

function sumOfNumbers (arr) {
  // make a sum variable
  let tempSum = 0;
  let largeSum = 0;
  // loop through and add to sum
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    // check if tempSum bigger than the largeSum
    if (tempSum > largeSum) {
      largeSum = tempSum;
    }
  }
  console.log(largeSum);
}

sumOfNumbers([4,6,-3,5,-2,1]);

// 4. Merge Arrays

function mergeArrays (arr1, arr2) {
  let newArray = [];
  let arr1Index = 0;
  let arr2Index = 0;

  let newArrayIndex = 0;
  while (newArrayIndex < (arr1.length + arr2.length) ) {

    let value1 = arr1[arr1Index];
    let value2 = arr2[arr2Index];

    if (value1 > value2) {
      newArray[newArrayIndex] = value2;
      arr2Index++;
    }
    else {
      newArray[newArrayIndex] = value1;
      arr1Index++;
    }
    newArrayIndex++;
  }
  console.log(newArray);
}

mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]);

// 5. Remove Characters

function removeCharas (str, rmv) {
  let newString = '';
  // first loop through the string
  for (let i = 0; i < str.length; i++) {
  // for each letter loop through the remove and test each letter against and remove it if it's the same  
  let removeChar = false;
    for (let j = 0; j < rmv.length; j++) {
      if (str[i] === rmv[j]) {
        removeChar = true;
      } 
    }
    if (!removeChar) {
      newString += (str[i]);
    }
  } 
  console.log(newString);
}

removeCharas('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

// 6. Products

function products (arr) {
  let productArray = [];
  // loop through array of numbers
  for (let i = 0; i < arr.length; i++) {
    let newArray = [];
    let removeNum = false;
    // check each number for the same value
    for (let j = 0; j < arr.length; j++) {
      // mark as true for same value
      if (arr[j] === arr[i]) {
        removeNum = true;
      }
      // 
      if (!removeNum) {
        newArray.push(arr[j]);
      }
      removeNum = false;
    }
    console.log(newArray);
    let numSum = 1;
    for (let y = 0; y < newArray.length; y++) {
      numSum *= newArray[y];
    }
    productArray.push(numSum);
    newArray = [];
  }
  console.log(productArray);
}

products([1, 3, 9, 4]);

// 7. 2D array

// 8. String rotation