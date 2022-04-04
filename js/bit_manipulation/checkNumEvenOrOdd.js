function isNumEvenOrOdd(num) {
  if(num & 1 == 1) return 'odd';
  return 'even';
}

console.log(isNumEvenOrOdd(-5));