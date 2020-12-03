function binarySearch(ar, num){
  let left = 0, right = ar.length - 1;
  while (left <= right){
    let mid = (left + right) / 2;
    if(ar[mid] > num){
      right = mid - 1;
    }
    else if(ar[mid] < num){
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const ar = [1, 2, 4, 5, 7, 12, 15, 16, 30, 45, 66];

function binarySearch2(ar, target) {
  let high = ar.length - 1;
  let low = 0;

  while(low <= high) {
    const mid = (high + low) / 2;

    if(ar[mid] > target) high = mid - 1;
    else if(ar[mid] < target) low = mid + 1;
    else return mid;
  }
  return -1;
}

console.log(binarySearch2(ar, 6));