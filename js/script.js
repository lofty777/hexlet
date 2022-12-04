"use strict";

const animals = ['cats', 'dogs', 'birds'];
animals[5] = 'ponys';
animals.push('pigs');
animals.unshift('horses');
delete animals[3];


console.log(animals[0]);

export const swap = (array) => {
    const first = array[0];
    const last = array.at(-1);
    if (array.length > 1) {
        array[0] = last;
        array[array.length - 1] = first;
        return array;
    }
    return array;
};
// Second solution
// export const swap = (items) => {
//     if (items.length < 2) {
//       return items;
//     }
//     const lastIndex = items.length - 1;
//     const last = items[lastIndex];
//     items[lastIndex] = items[0];
//     items[0] = last;
  
//     return items;
//   };
 
console.log(swap([1, 2]));