"use strict";

const reverseInt = (num) => {
    const numAsStr = String(Math.abs(num));
    let reversedStr = '';
  
    for (let i = 0; i < numAsStr.length; i += 1) {
      reversedStr = +`${numAsStr[i]}${reversedStr}`;
    }
  
    console.log(num < 0 ? -reversedStr : reversedStr);
  };
  

  reverseInt(-2445);
  export default reverseInt;

