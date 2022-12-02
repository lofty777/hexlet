"use strict";

const countChars = (str, char) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i].toLowerCase() === char.toLowerCase()) {
        count += 1;
      }
  
      i += 1;
    }
  
    return count;
  };

console.log(countChars('Polina Mmmm', 'M'));