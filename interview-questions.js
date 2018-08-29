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

// 3. Max sum in the array

// 4. Merge Arrays

// 5. Remove Characters

// 6. Products

// 7. 2D array

// 8. String rotation