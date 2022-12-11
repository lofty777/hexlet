"use strict";
import _ from 'lodash';

const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
];

const currentPoint = [1, 3];

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};
export const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
        return null;
    }
    let arr = [];
    for (const [, point] of locations) {
        arr.push(getDistance(point,currentPoint));
    }
    console.log(arr);
    arr.sort();
   const [[nearDistanse]] = [arr];
   console.log(nearDistanse);
   for (let i = 0; i < locations.length; i++) {
    
    if (getDistance(locations[i][1], currentPoint) <= nearDistanse) {
        return locations[i];
    }
   }
};

//Second solution
// export const getTheNearestLocation = (locations, currentPoint) => {
//     if (locations.length === 0) {
//       return null;
//     }
  
//     let [nearestLocation] = locations;
//     const [, nearestPoint] = nearestLocation;
//     let lowestDistance = getDistance(currentPoint, nearestPoint);
  
//     for (const location of locations) {
//       const [, point] = location;
//       const distance = getDistance(currentPoint, point);
//       if (distance < lowestDistance) {
//         lowestDistance = distance;
//         nearestLocation = location;
//       }
//     }
  
//     return nearestLocation;
//   };

console.log(getTheNearestLocation(locations, currentPoint));