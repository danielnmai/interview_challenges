const SinglyList = require('../../data_structure/singly_list');
const Queue = require('../../data_structure/queue_with_array');


function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function createListOfDepths(node){
  const queue = new Queue();
  queue.enqueue(node);
  while(!queue.isEmpty()){
    const curNode = queue.dequeue();
    List.add(curNode);
  }
  
}

const queue = new Queue();



const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.left = node2;
node1.right = node3;
const List = new SinglyList();

console.log(List.add(node1));
console.log(List);