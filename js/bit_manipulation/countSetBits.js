function countSetBitsBasic(n) {
  let q = n;
  let count = 0;
  while(q > 0) {
    if(q % 2 !== 0) count++; // count number of set bits (1) in the binary
    // q = q >> 1; // or q = q /2
    q = parseInt(q/2);
  }

  return count;
}

function countSetBitsWithAND(n) {
  let q = n;
  let count = 0;
  while(q > 0) {
    if(q & 1 === 1) count++; // count number of set bits (1) in the binary
    // q = q >> 1; // or q = q /2
    q >>= 1;
  }

  return count;
}

// Brian Kernighan Algorithm
// Runtime O(Number of set-bits in n)
function countSetBitsAdvanced(n) {
  let q = n;
  let count = 0;
  while(q > 0) {
    q = q & (q - 1);
    console.log('q ', q);
    count++;
  }

  return count;
}

console.log(countSetBitsBasic(125));
console.log(countSetBitsWithAND(125));
console.log(countSetBitsAdvanced(40));