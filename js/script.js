"use strict";

const printNumbers = (initialNumber) => {
    // BEGIN (write your solution here)
    let i = initialNumber;
    while (i > 0) {
        console.log(i);
      i--;
    }
    console.log('finished!');
};

printNumbers(5);

const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let multiply = 1;
    while (i <= finish) {
      multiply *= i;
      i += 1;
    }
    return multiply;
  };
  
  console.log(multiplyNumbersFromRange(3, 9)); // 60