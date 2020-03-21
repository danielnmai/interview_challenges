/*

*/


// function fruitIntoBaskets(ar){
//   const map = new Map();
//   let firstDiffIndx;
//   for(let i = 0; i < ar.length; i++){
//     let num = ar[i];
    
//     if(!map.has(num) && map.size < 2){
//       map.set(num, i);
//     }

//     if(map.size === 2){
//       const[startP, endP] = map.entries();
//       const[startPVal, startPIndx] = startP;
//       const[endPVal, endPIndx] = endP;
//       if(!map.has(num)) {
//         if(i - endPIndx > endPIndx - startPIndx){
//           map.delete(startPVal);         
//           map.set(num, i);
//         }
//       } else {
//         map.set(endPVal, i);
//       }
      
//     }
//     if(ar[i - 1] !== ar[i]){     
//       firstDiffIndx = i;
//     }
//   }
//   console.log('first diff indx', firstDiffIndx);
//   return map;
// }

function totalFruit(tree){
  if(!tree || tree.length === 0){
    return 0;
  }
  let i = 0, j = 0;
  let max = 1;
  const map = new Map();

  while(j < tree.length){
    if(map.size <= 2){
      map.set(tree[j], j);
    }
    if(map.size > 2){
      let min = tree.length - 1;
      for(value of map.values()){
        min = Math.min(min, value);
      }
      max = Math.max(max, j - i);
      i = min + 1;
      map.delete(tree[min]);
    }
    j++;
  }
  max = Math.max(max, j - i);
  return max;
}

const ar = [0, 1, 2, 2];
const ar1 = [1, 2, 1, 3, 3, 3, 4, 4, 4, 4];
const ar2 = [1, 2, 1];
const ar4 = [3,3,3,1,2,1,1,2,3,3,4];

// console.log(totalFruit(ar));
// console.log(totalFruit(ar1));
console.log(totalFruit(ar4));




