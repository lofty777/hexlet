"use strict";
import _ from 'lodash';

const getSameParity = (coll) => {
    const result = [];
    const remained = Math.abs (coll[0] % 2);

    for (const item of coll) {
        if (Math.abs(item % 2) === remained) {
            result.push(item);
        }
    }

    return result;
};


const coll = [];
console.log(getSameParity(coll));