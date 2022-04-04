function decimalToBinary(dec) {
  /*
  65 / 2 = 32 remainder = 1
  32 / 2 = 16 remainder = 0
  16 / 2 = 8 remainder = 0
  8 / 2 = 4 remainder = 0
  4 / 2 = 2 remainder = 0
  2 / 2 = 1 remainder = 0
  1 / 2 = 0 remainder = 1

  binary = all the remainders: 1 0 0 0 0 0 1

  */
  let remainder;
  const result = [];
  let quotient = dec;

  while(quotient !== 0) {
    remainder = quotient % 2;
    quotient = parseInt(quotient / 2);
    result.unshift(remainder);
  }
  return result.join('');

}

function convertToBinary(x) {
  const stack = [];
  let quotient = x;
  while(quotient !== 0) {
    const remainder = quotient % 2;
    stack.push(remainder);
    quotient = parseInt(quotient / 2);
  }
  return stack.reverse().join('');
}

console.log(decimalToBinary(125));
// console.log(convertToBinary(23710));
