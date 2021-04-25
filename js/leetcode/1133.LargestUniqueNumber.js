/**
 * @param {number[]} A
 * @return {number}
 */
 var largestUniqueNumber = function(A) {
   const map = new Map();
   let largestNumber = -1;
   
   for(let i = 0; i < A.length; i++){
    map.set(A[i], (map.get(A[i]) || 0) + 1);
   }

   map.forEach((value, key) => {
     if(value === 1) {
       if(key > largestNumber) {
         largestNumber = key;
       }
     }
   })

  return largestNumber;
};

const input = [5,7,3,9,4,9,8,3,1];

console.log(largestUniqueNumber(input));