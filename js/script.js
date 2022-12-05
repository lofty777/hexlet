"use strict";

const animals = ['cats', 'dogs', 'birds'];
animals[5] = 'ponys';
animals.push('pigs');
animals.unshift('horses');
delete animals[3];


console.log(animals[0]);

const get = (array, index, param = null) => {
    if (index < array.length && index > -1) {
        return array[index];
    }
    return param;
};
    const cities = ['moscow', 'london', 'berlin', 'porto'];

    console.log(get(cities, 0));

