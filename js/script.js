"use strict";

const encrypt = (message) => {
    let result = '';
    
    for (let i = 0; i < message.length; i+= 2) {
        const nextSymbol = message[i+1] || '';
       
        result = `${result}${nextSymbol}${message[i]}`;
    }
    
    return result;
  };




