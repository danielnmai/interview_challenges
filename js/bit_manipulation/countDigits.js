function countDigits(num) {
  let count = 0;
  if(num === 0) return 1;
  let absNum = Math.abs(num);

  while(absNum > 0) {
    absNum = Math.floor(absNum / 10);
    count++;
  }

  return count;

}
console.log('count digits 10', countDigits(20422421));
