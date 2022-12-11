"use strict";
import _ from 'lodash';

export const flatten = (coll) => {
    if (coll.length === 0) {
        return [];
    }
    const newArr = [];
    for (const item of coll) {
        if (Array.isArray(item)) {
            const spred = item;
            newArr.push(...spred);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
    
};

console.log(flatten([]));
