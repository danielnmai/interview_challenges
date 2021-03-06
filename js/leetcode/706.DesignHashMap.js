/**
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
  this.hashMap = {};
  
};

/**
* value will always be non-negative. 
* @param {number} key 
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function(key, value) {
  this.hashMap[key] = value;
};

/**
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
  if(this.hashMap.hasOwnProperty(key)) {
      return this.hashMap[key];
  }
  return -1;
};

/**
* Removes the mapping of the specified value key if this map contains a mapping for the key 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
  delete this.hashMap[key];
};

/** 
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)l
* obj.remove(key)
*/

const hashMap = new MyHashMap();

function fizzBuzz(n) {
  // Write your code here
  for(let i = 1; i <= n; i ++) {
      if(i % 3 === 0 && i % 5 === 0) {
          return 'FizzBuzz';
      }
      else if(i % 3 === 0) return 'Fizz';
      else if(i % 5 === 0) return 'Buzz';
      else return i;
  }
}

fizzBuzz(15);
