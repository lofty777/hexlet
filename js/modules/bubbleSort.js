const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < stepsCount; i += 1) {
            if (coll[i] > coll[i + 1]) {
                let temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
            }
            swapped = true;
        }
    stepsCount -= 1;

    } while (swapped);

    return coll;
};

export default bubbleSort;

console.log(bubbleSort([1, 4, 3, 10, 5, 0, 6, 99]));