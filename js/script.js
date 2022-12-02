"use strict";

const makeItFunny = (str, n) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
      if ((i + 1) % n === 0) {
        result = `${result}${str[i].toUpperCase()}`;
      } else {
        result = `${result}${str[i]}`;
      }
  
      i += 1;
    }
  
    return result;
  };

console.log(makeItFunny('Polinf malinffdafda', 3));