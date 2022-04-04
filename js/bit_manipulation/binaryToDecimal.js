function binaryToDecimal(binStr) {
  let power = 0;
  let dec = 0;

  const ar = binStr.split('');
  let i = ar.length - 1;
  while(i >= 0) {
    const curNum = Math.pow(2, power++) * parseInt(ar[i]);
    dec += curNum;
    i--;
  }

  return dec;
}

console.log('convert binary 1000110011000111 to decimal', binaryToDecimal('1000110011000111'));