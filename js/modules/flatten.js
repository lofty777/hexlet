export const flatten = (coll) => {
    if (coll.length === 0) {
        return [];
    }
    const newArr = [];
    for (const item of coll) {
        if (Array.isArray(item)) {
            const spred = item;
            newArr.push(...spred);
        } else {
            newArr.push(item);
        }
    }
    return newArr;
    
};

console.log(flatten([]));

export const flatten2 = (coll) => {
    let result = [];
    for (const item of coll) {
      if (Array.isArray(item)) {
        result = [...result, ...item];
      } else {
        result = [...result, item];
      }
    }
  
    return result;
  };