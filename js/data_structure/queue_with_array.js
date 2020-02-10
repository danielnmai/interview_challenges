function Queue() {
  this.items = [];

  Queue.prototype.enqueue = function(item) {
    this.items.push(item); // add the item to the end of the array
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
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(2);

// queue.dequeue();
queue.dequeue();

console.log(queue.items);

module.exports = Queue;