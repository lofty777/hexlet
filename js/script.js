"use strict";
import _ from 'lodash';

// const getIntesectionOfSortedArrays = (arr1, arr2) => {
//     const result = _.intersection (arr1, arr2);
//     return result;
// };

// const getIntesectionOfSortedArrays = (arr1, arr2) => {
//     let result = [];
//     for (const number of arr1) {
//         if (arr2.includes(number)) {
//             result.push(number);
//         }
//     }
//     result = Array.from (new Set (result));
//     return result;
// };
const getIntesectionOfSortedArrays = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length - 1; i += 1) {
      if (arr2.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
    result = Array.from(new Set(result));
    return result;
  };
  
  export default getIntesectionOfSortedArrays;


console.log(getIntesectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3]));