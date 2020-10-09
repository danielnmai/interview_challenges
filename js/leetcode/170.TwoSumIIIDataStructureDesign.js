/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.map = new Map();
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
  if(this.map.has(number)){
    this.map.set(number, this.map.get(number) + 1)
  } else {
    this.map.set(number, 1);
  }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
  const map = this.map;
  for(const [num, count] of map.entries()){
    let diff = value - num;
    
    if(this.map.has(diff) && (diff !== num || count > 1)) return true;
  }
  return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

 const obj = new TwoSum();
 obj.add(0)
 obj.add(0)
 obj.add(0)

 console.log(obj.find(0))