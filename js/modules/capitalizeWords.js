"use strict";

const capitalize = (text) => {
   return text.length === 0 ? text : `${text[0].toUpperCase()}${text.slice(1)}`;
};
console.log (capitalize('a'));

const capitlaizeWords = (sentence) => {
    const separator = ' '; // Определили разделитель
    const words = sentence.split(separator);
    console.log(words); // Получили массив words = [ 'hello', 'from', 'Malasia' ];
    const capitalizeWords = []; // Создали новый пустой массив
    for (const item of words) {
        capitalizeWords.push(capitalize(item)); // Заполняем массивы элементами, каждый из которых начинается с заглавной буквы
    }
    console.log(capitalizeWords);

    console.log(capitalizeWords.join('\n'));


};



capitlaizeWords('hello from Malasia');