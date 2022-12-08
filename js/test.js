import _ from 'lodash';
// var numbers = [1, 2, 2, 4];
// var result = _.uniq(numbers);
// console.log(result);

const text1 = "yyab";
// const arr1 = [];
// for (let i = 0; i < text1.length; i++) {
//     arr1.push(text1[i]);
// }
// console.log(arr1);
// const result = _.uniq(arr1);
// console.log(result);
// console.log(result.length);

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