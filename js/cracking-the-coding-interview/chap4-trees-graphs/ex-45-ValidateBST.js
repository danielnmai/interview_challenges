const Queue = require('../../data_structure/queue_with_array');

function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function validateBST(node){
  if(node === null){
    return false;
  }
  const queue = new Queue();
  queue.enqueue(node);

  while(!queue.isEmpty()){
    const curNode = queue.dequeue();
    if(curNode.left){
      if(curNode.left.value <= curNode.value){
        queue.enqueue(curNode.left);
      } else {
        return false;
      }
    }

    if(curNode.right){
      if(curNode.right.value >= curNode.value){
        queue.enqueue(curNode.right);
      } else {
        return false;
      }
    }
  }
  return true;
}

const root = new Node(8);
const node6 = new Node(6);
const node5 = new Node(5);

const node7 = new Node(7);
const node12 = new Node(12);
const node11 = new Node(11);
const node13 = new Node(13);

root.left = node6;
root.right = node12;

node6.left = node5;
node6.right = node7;

node12.left = node11;
node12.right = node13;


console.log(validateBST(root));