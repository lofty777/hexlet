"use strict";

const getTotalAmount = (coll, kindOfMoney) => {
    let sum = 0;
    
    for (const item of coll) {
        const exchange = item.slice(0, 3);
        if (exchange !== kindOfMoney) {
            continue;
        }
        const countMoney = +item.slice(4);
        sum += countMoney;
    }
    
    console.log(sum);
};

const money1 = [
    'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16

const money2 = [
    'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
getTotalAmount(money2, 'eur') // 135

const money3 = [
    'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
getTotalAmount(money3, 'rub') // 270
