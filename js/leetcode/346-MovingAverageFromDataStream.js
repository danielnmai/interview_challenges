/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.array = [];
  this.size = size;
  this.count = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {

  this.count++;

  let length = this.count;

  if(length > this.size) {
    this.array.shift();
    this.array.push(val);
    length = this.size;
  } else {
    this.array.push(val);
  }

  return this.array.reduce(((a, b) => a + b), 0) / length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */


 const m = new MovingAverage(4);

 console.log('m ',  m.next(100));
 console.log('m ',  m.next(-10));
 console.log('m ',  m.next(-300));
 console.log('m ',  m.next(50));
 console.log('m ',  m.next(0));
//  console.log('m ',  m.next(3));
//  console.log('m ',  m.next(5));

