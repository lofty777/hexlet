"use strict";
import _ from 'lodash';

const text1 = "yyab";

const countUniqChars = (text) => {
    const coll = [];
    for (const item of text) {
        // coll.push(item);
        if (!coll.includes(item)) {
            coll.push(item);
        }
    }
    // const result = _.uniq(coll);
    return coll.length;
};

export default countUniqChars;

console.log(countUniqChars(text1));


