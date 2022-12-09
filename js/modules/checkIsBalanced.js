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

const checkIsBalanced = (expression) => {
  const stack = [];
  for (const symbol of expression) {
    console.log(symbol);
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
      console.log(stack);
    } else {
      const lastSavedSymbol = stack.pop();
      console.log(lastSavedSymbol);
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(checkIsBalanced('(({[])}}}))))))'));