export const reverseInt = (int) => {
    let result = '';
    for (let i = 0; i < int.length; i += 1) {
        result = +`${int[i]}${result}`;
    }
    console.log(result);
  };

reverseInt('123400');
 
