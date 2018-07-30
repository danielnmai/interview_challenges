function Stack(){
  this.size = 0
  this.values = {}
}
Stack.prototype.push = function(value){
  let size = this.size++
  this.values[size] = value
}
Stack.prototype.pop = function(){
  let size = this.size - 1
  console.log(size)
  if(size){
    let deletedData = this.values[size]
    delete this.values[size]
    this.size--
    return deletedData
  }
}
let stack = new Stack()
stack.push('first')
stack.push('second')
stack.push('third')
console.log(stack.pop())
console.log(stack)
