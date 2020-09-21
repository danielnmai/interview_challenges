/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_VALUE;

    function stackNode(val, min){
      this.val = val;
      if(min < val){
        this.min = min; 
      } else {
        this.min = val;
      }      
    }
    this.createNode = function(val, min){
      return new stackNode(val, min);
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(x < this.min){
      this.min = x;
    }

    const stackNode = this.createNode(x, Math.min(min, x));

    return this.stack.push(stackNode);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   if(this.stack.length > 0){
     return this.stack.pop();
   }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if(this.stack.length > 0){
    return this.stack[this.stack.length - 1].val;
  } 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.stack.length >  0){
      return this.stack[this.stack.length - 1].min;
    }    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 const minStack = new MinStack();

 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);

 console.log(minStack.getMin());
 console.log(minStack.pop());
 console.log(minStack.top());


 [null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483646,null,-2147483648,-2147483648,null,2147483646]
 [null,null,null,null,2147483647,null,2147483646,null,2147483646,null,null,2147483647,2147483647,null,-2147483648,-2147483648,null,2147483647]

