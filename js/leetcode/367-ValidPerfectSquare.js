function isPerfectSquare(num){
  if(num < 2){
    return true;
  }

  let left = 2;
  let right = num / 2;

  while(left <= right){
    let mid = left + Math.floor((right - left) / 2);
    let guessNum = mid * mid;
    if(guessNum == num) {
      return true;
    } else if( guessNum > num){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}


console.log(isPerfectSquare(16));
console.log(isPerfectSquare(15));
console.log(isPerfectSquare(9));
console.log(isPerfectSquare(1));