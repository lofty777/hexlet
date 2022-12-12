"use strict";
import _ from 'lodash';


const chunk = (coll, chunkLength) => {
    const res = [];
    for (let i = 0; i < coll.length; i += chunkLength) {
        const chunk = coll.slice(i, i + chunkLength);
        res.push(chunk);
    }
    return res;
};

export default chunk;

const spliceIntoChunks = (arr, chunkSize) => {
    const res1 = [];
    while (arr.length > 0) {
        const chunk1 = arr.splice(0, chunkSize);
        res1.push(chunk1);
    }
    return res1;
};
    


console.log(spliceIntoChunks(['a', 'b', 'c', 'd'], 3));