"use strict";
import _ from 'lodash';

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [1, 3];

export const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
        return null;
    }
    // const [a, b, c] = locations;
    // const [place, point] = a;
    // const [place1, point1] = b;
    // const [place2, point2] = c;

    const getDistance = ([x1, y1], [x2, y2]) => {
        const xs = x2 - x1;
        const ys = y2 - y1;

        return Math.sqrt(xs ** 2 + ys ** 2);
    };
    let arr = [];
    for (const [place, point] of locations) {
        arr.push(getDistance(point,currentPoint));
    }
    console.log(arr);
    arr.sort();
   const [[nearDistanse]] = [arr];
   console.log(nearDistanse);
   let result;
   for (let i = 0; i < locations.length; i++) {
    if (getDistance(locations[i][1], currentPoint) <= nearDistanse) {
        return locations[i];
    }
   }
};

console.log(getTheNearestLocation(locations, currentPoint));