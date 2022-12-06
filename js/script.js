"use strict";

const animals = ['cats', 'dogs', 'birds'];
animals[5] = 'ponys';
animals.push('pigs');
animals.unshift('horses');
delete animals[3];


console.log(animals[0]);

const addPrefix = (array) => {
    for (let i = 0; i < array.length/2; i++) {
        let a = array[i];
        array[i]=array[array.length-1-i];
        array[array.length-1-i] = a;
        
    }
    return array;
};

const names = ['john', 'alex', 'max','polina', 'teo'];
const newNames1 = addPrefix(names);

console.log(newNames1);
console.log(newNames1);


