"use strict";

// const makeCensored = (text, stopWords) => {
//     const separator = ' ';
//     const sensore = '$#%!';
//     const words = text.split(separator);
//     // console.log(words);
//     for (let i = 0; i < stopWords.length; i++) {
        
//         for (let j = 0; j < words.length; j++) {
//             if (stopWords[i] === words[j]) {
//                 words[j] = sensore;
//             }
//         }
//     }
//     console.log(words.join(separator));
// };

// Second solution
const makeCensored = (text, stopWords) => {
    const separator = ' ';
    const sensore = '$#%!';
    const words = text.split(separator);
  
    const result = [];
    for (const word of words) {
      const newWord = stopWords.includes(word) ? sensore : word;
      result.push(newWord);
    }
  
    console.log(result.join(separator)) ;
  };
  
const text = 'chicken chicken? chicken! chicken';
makeCensored(text, ['?', 'chicken']);
