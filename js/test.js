const field = [];
for (let i = 1; i < 4; i++) {
    field.push([null,null,null]);
    // for (let j = 0; j < 3; j++) {
    //     field[j] = [null, null, null];
    // }
}
console.log(field);

field [1] [2] = 'x'
console.log(field);

const hasPlayerMove = (field, symbol) => {
    for (const row of field) {
        if (row.includes(symbol)) {
            return true;
        }
    }

    return false;
};

console.log(hasPlayerMove(field, 'd'));