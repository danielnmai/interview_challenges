/*
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.
*/
function reverseWords(arr) {
  // your code goes here
  
  /*       s                                   
  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
                                              

   output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
    'm', 'a', 'k', 'e', 's', '  ',
    'p', 'e', 'r', 'f', 'e', 'c', 't' ]
    
    [ [practice], [makes], [perfect]
    
*/
  
  const spaceIndexes = [];
  

  for(let i = 0; i < arr.length / 2; i++){
    swap(arr, i, arr.length - 1 - i);
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === ' ') {
      spaceIndexes.push(i);
    }
  }

  let i = 0;
  let j = 0
  let limit = i + spaceIndexes[j]; // 
  while(i < limit / 2) {
    swap(arr, i, limit - 1 - i);
    if(i === (limit / 2) - 1 ) {
      i = spaceIndexes[j] + 1;
      j = j + 1;
      limit = i + spaceIndexes[j]; // 
    }
    i = i + 1;
  }

  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
'm', 'a', 'k', 'e', 's', ' ',
'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
const arr2 = ['a', 'b', 'c', ' ', 'd', 'e', ' ', 'f'];


console.log(reverseWords(arr2));

