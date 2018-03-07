function Node(data){
  this.data = data
  this.next = null
}

function SinglyList(){
  this.length = 0
  this.head = null
}

SinglyList.prototype.add = function(data){
  let node = new Node(data)
  let currentNode = this.head

  //an empty list
  if(!currentNode){
    this.head = node
    this.length ++
    return node
  }
  //a non-empty list
  while(currentNode.next){
    currentNode = currentNode.next
  }
  currentNode.next = node
  this.length++
  return node
}

SinglyList.prototype.search = function(position){
  let currentNode = this.head,
    count = 1,
    length = this.length
  message = {failure: 'No such node in this list.'}

  //invalid position
  if(length === 0 || position < 1 || position > length){
    throw new Error(message.failure)
  }

  //valid position
  while (count < position){
    console.log(currentNode.data)
    currentNode = currentNode.next
    count++
  }

  return currentNode
}

let list = new SinglyList()
let firstNode = list.add(2)
let secondNode = list.add(5)
let thirdNode = list.add(7)
let fourthNode = list.add(9)
console.log(firstNode.next)
console.log(list.search(4))

console.log(list.length)
