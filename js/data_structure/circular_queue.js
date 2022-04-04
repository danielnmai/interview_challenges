

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
this.queue = new Array(k);
  this.maxSize = k;
  this.queueSize = 0;
  this.front = -1;
  this.rear = -1;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.queueSize === this.maxSize) {
    return false;
  }

  // queue is empty
  if(this.isEmpty()) {
    this.queue[0] = value;
    this.front++;
    this.rear++;
  } else {
    this.rear = (this.rear + 1) %  this.maxSize;
    this.queue[this.rear] = value;
  }
  this.queueSize++;
  console.log('front', this.front)
  console.log('rear', this.rear);
  console.log('queue', this.queue);
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()) {
    return false;
  }
  this.queue[this.front] = null;
  this.front = (this.front + 1) % this.maxSize;
  this.queueSize--;

  // if queue is empty after dequeuing, reset front and rear
  if(this.isEmpty()) {
    this.front = -1;
    this.rear = -1;
  }

  console.log('queue ', this.queue);
  console.log('rear ', this.rear);
  console.log('front ', this.front);

  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.queue[this.front];

};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
return this.queue[this.rear];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.queueSize === 0;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
return this.queueSize === this.maxSize;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()



front = -1
rear = -1

f
r
0       1     2     3     4     5
null, null, null, null, null, null



*/

const queue = new MyCircularQueue(6);
queue.enQueue(6);
console.log(queue.Rear());
queue.deQueue();
queue.enQueue(5);
console.log(queue.Rear());
queue.deQueue();
// queue.deQueue();
// console.log(queue.Front());