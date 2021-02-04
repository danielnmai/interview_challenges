/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const MODULO = Math.pow(10, 9) + 7;
    let result = 0;

    for(let i = 1;  i <= n; i++) {
      const binaryValue = i.toString(2);
      for(let j = 0; j < binaryValue.length; j++) {
        result = (result * 2 + parseInt(binaryValue[j], 10)) % MODULO;
      }
    }
    return result;
};


console.log(concatenatedBinary(42));˜