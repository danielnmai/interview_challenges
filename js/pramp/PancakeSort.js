/*

Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.

input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5] 

*/


function flip(arr, k) {
  const pivot = Math.floor(k / 2);

  for(let i = 0; i < pivot; i++) {
    let temp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = temp;
  }

  return arr;
}
// funcrtion pancakeSort(arr) {


// }

let  arr = [1, 5, 4, 3, 2, 0, 9];



console.log(flip(arr, 4));





