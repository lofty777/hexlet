"use strict";

const getHiddedCard = (cardsNumbers, starsCount = 4) => {
    let star = '*';
    const result = `${star.repeat(starsCount)}${cardsNumbers.slice(-4)}`;
    console.log(result);
};

getHiddedCard('234240807', 9);