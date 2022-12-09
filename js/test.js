import _ from 'lodash';

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => {
  for (let i = 0; i < closingSymbols.length; i += 1) {
    if (openingSymbols[i] === symbol) {
      return closingSymbols[i];
    }
  }
  return null;
};

const checkIsBalanced = (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(checkIsBalanced('({}}[]'));

// const spinWords = (text) => {
//     let arr = [];
//     const separator = ' ';
//     arr = text.split(separator);
//     console.log(arr);
//     for (let j = 0; j < arr.length; j++) {
//         const item = arr[j];
//         if (item.length > 4) {
//             let result = '';
//             for (let r = 0; r < item.length; r++) {
//                 result = `${item[r]}${result}`;
//             }
//             arr[j] = result;
//         }
//     }
//     console.log(arr);
//     const spinText = arr.join(separator);
//     console.log(spinText);
// };

// spinWords('Hi my welcome dear Polina');