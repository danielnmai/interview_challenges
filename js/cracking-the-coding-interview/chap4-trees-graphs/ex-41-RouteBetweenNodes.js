function Node(value) {
  this.value = value;
  this.next = null;
  this.visited = false;
}

function isRouteBetweenNodes(startNode, endNode) {
  if(startNode === null || endNode === null) {
    return false;
  }

  let currentNode = startNode.next;
  while(currentNode !== null) {
    if(currentNode.value === endNode.value && !currentNode.visited) {
      return true;
    }
    currentNode.visited = true;
    currentNode = currentNode.next;
  }
  return false;
}


const node2 = new Node(2);
const node3 = new Node(3);
const node1 = new Node(1);
const node4 = new Node(4);

const node5 = new Node(5);

node2.next = node3;
node3.next = node1;
node1.next = node4;
node4.next = node3;




console.log(isRouteBetweenNodes(node2, node5));

