/*

Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

source = "no", target = "go"
words = ["to"]

output: -1

*/



function shortestWordEditPath(source, target, words) {
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/
  
 
  
  const queue = new Queue();
  let seen = {};

  queue.enqueue(source, 0);

  while(!queue.isEmpty()){
    const word = queue.dequeue();
    const level = queue.getLevel();

    if(word === target){
      return level;
    }

    for(let i = 0; i < words.length; i++){
      const curWord = words[i];
      if(isNeighbor(word, curWord) && !seen.hasOwnProperty(curWord)){
        queue.enqueue(curWord, level + 1);
        seen[curWord] = true;
        break;
      }
    }
  }

  return -1;
}

function isNeighbor(source, target){
  if(source.length !== target.length){
    return false;
  }
  
  let count = 0;

  for(let i = 0; i < source.length; i++){
    if(source[i] !== target[i]){
      count++;
    }
  }
  if(count === 1) {
    return true;
  }
  
  return false;
}

function Queue() {
  this.items = [];
  this.level = 0;

  Queue.prototype.enqueue = function(item, level) {
    this.items.push(item); // add the item to the end of the array
    this.level = level;
  }

  Queue.prototype.dequeue = function() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items.shift() // remove the first item and return it
  }
  Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
  }
  Queue.prototype.getLevel = function(){
    return this.level;
  }
}


const source = "bit"; const target = "dog";
const words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
const source1 = "no";
const target1 = "go";
const words1 = ["to"];


console.log(shortestWordEditPath(source, target, words));
// console.log(shortestWordEditPath(source1, target1, words1));


