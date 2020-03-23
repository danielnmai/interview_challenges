/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/** 
 * h i t
 * 
 * 
 * h O t
 * D o t
 * d o G
 * C o g
 * 
 * 
 * [h o t, d o t, d o g, l o t, l o g, c o g]
 * 
 * for each word in list:
 * compare beginWord with each word: is there any word that is different by only one char? It's a good word to start
 * 
 * for example: hit === hot => differ by one char 'i' & 'o' => return word
 * 
 * set curWord = returned word
 * 
 * keep searching in word list:
 * 
 * hot === dot => differ 1 char => return word
 * etc..
 * 
 * increment the length as we go
 * 
 * until curWord = endWord => return length
 * 
 * but it will not be the shortest length
 * 
 *                  hit
 *                 /
 *                hot
 *               /   \
 *              dot   lot
 *            /   \     \
 *          dog   lot    log
 *          /       \       \
 *         cog       log     cog
 *                    \ 
 *                      cog 
 * 
 * c o g
 * 
 * 
 * 
 * 
 * 
*/
var ladderLength = function(beginWord, endWord, wordList) {

    const queue = new Queue();
    queue.enqueue(beginWord, 0);
    const seen = new Set();  
    seen.add(beginWord);

    while(!queue.isEmpty()){
        const word = queue.dequeue();
        const level = queue.getLevel();

        if(word === endWord){
          return level;
        }

        for(let i = 0; i < wordList.length; i++){
            const curWord = wordList[i];
           
            if(isNeighbor(word, curWord) && !seen.has(curWord)){
                queue.enqueue(curWord, level + 1);             
                seen.add(curWord);
            }
           
        }
    }

    return 0; 
    
};

function isNeighbor(word1, word2){
    if(word1.length === word2.length){
      let differences = 0;
      for(let i = 0; i < word1.length; i++){
          if(word1[i] !== word2[i]){
              differences++;
          }
      }
      return differences === 1;   
    }       
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

const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

const beginWord1 = "a";
const endWord1 = "c";
const wordList1 = ["a", "b", "c"];

const beginWord2 = "hot";
const endWord2 = "dog";
const wordList2 = ["hot", "dog", "dot"];

const beginWord3 = "bit";
const endWord3 = "pog";
const wordList3 = ["but","put","big","pot","pog","pig","dog","lot"];

const newQueue = new Queue();

console.log(ladderLength(beginWord, endWord, wordList));
console.log(ladderLength(beginWord1, endWord1, wordList1));
console.log(ladderLength(beginWord2, endWord2, wordList2));
console.log(ladderLength(beginWord3, endWord3, wordList3));