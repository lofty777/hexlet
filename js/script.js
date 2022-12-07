"use strict";

const getSuperSeriesWinner = (scores) => {
    let result = 0;
    for (const item of scores) {
        result += Math.sign(item[0] - item[1]);
    }
    console.log(result);

    if (result > 0) {
        console.log('canada');
    }
    if (result < 0) {
        console.log('ussr');
    } else {
        console.log(null);
    }
};
// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
    [3, 7], // 0:1
    [4, 1], // 1:1
    [4, 4], // 1:1
    [3, 5], // 1:2
    [4, 5], // 1:3
    [3, 2], // 2:3
    [4, 3], // 3:3
    [5, 5], // 4:3
];

getSuperSeriesWinner(scores); // 'canada'