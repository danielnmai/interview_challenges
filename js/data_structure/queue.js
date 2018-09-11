 function Queue(){
  this.values = {}
  this.firstEnd = 0
  this.lastEnd = 0

  Queue.prototype.enqueue = function(value){
    //Add to the end of the queue
    if(value){
      this.values[this.firstEnd] = value
      this.firstEnd++
    }
  }
  Queue.prototype.dequeue = function() {
    //if firstEnd == lastEnd, queue is empty, return undefined
    if(this.firstEnd - this.lastEnd === 0){
      return undefined
    }
    //Remove from the beginning of the Queue
    let removedValue = this.values[this.lastEnd]
    delete this.values[this.lastEnd]
    this.lastEnd ++
    return removedValue
  }
  
  Queue.prototype.isEmpty = function(){
    return this.firstEnd - this.lastEnd === 0
  }
}

module.exports = Queue
