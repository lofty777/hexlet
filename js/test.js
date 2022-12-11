const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]]
];
const getTheNearestLocation = (locations, currentPoint) => {
    if (locations.length === 0) {
        return null;
    }
    for (const item of locations) {
        console.log(item);
    }

};

const currentPoint = [8, 9];

getTheNearestLocation(locations, currentPoint);