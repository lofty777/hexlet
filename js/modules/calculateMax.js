export const calculateMax = (coll) => {
    if (coll.length === 0) {
        return null;
    }

    let max = coll[0];

    for (let i = 1; i < coll.length; i++) {
        const currentElement = coll[i];
        if (currentElement > max) {
            max = currentElement;
        }
    }
    return max;
};

console.log(calculateMax([1, 4, 999, -9]));