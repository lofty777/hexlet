const roadMines = [false, true, false, false, true, false, false, true, false, true, false, true, false];

for (let j = 0; j < roadMines.length; j++) {
    if (roadMines[j] === true) {
    console.log('танк повреждён');
}
}

for (let i in roadMines) {
    if(roadMines[i] === false) {
        console.log(`танк переместился на ${(+i) + 1}`);
    } else {
        console.log('танк убит');
    }
}