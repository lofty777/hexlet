const compact = (coll) => {
    const deletedItem = null;
    const result = [];
    
    for (const item of coll) {
        if (item !== deletedItem) {
            result.push(item);
        }
    }
    
    return result;
};

const coll = [null, 1, 44, 'sdf', null, false, 'hello'];
console.log(compact(coll));