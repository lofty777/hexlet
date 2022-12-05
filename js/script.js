"use strict";

const animals = ['cats', 'dogs', 'birds'];
animals[5] = 'ponys';
animals.push('pigs');
animals.unshift('horses');
delete animals[3];


console.log(animals[0]);

const addPrefix = (array, prefix) => {
    const array2 = array.slice();
    for (let i = 0; i < array2.length; i += 1) {
        array2[i] = `${prefix} ${array[i]}`;
    }
    return array2;
};

//Second solution

// const addPrefix = (array, prefix) => {
//     const array2 = [];
//     for (let i = 0; i < array.length; i += 1) {
//       array2[i] = `${prefix} ${array[i]}`;
//     }
//     return array2;
//   };
  
//   export default addPrefix;

const names = ['john', 'alex', 'polina', 'teo'];
const newNames1 = addPrefix(names, 'Mr');

console.log(newNames1);
console.log(names);


