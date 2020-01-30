const Queue = require('../data_structure/queue_with_array.js');

function Node(value) {
  this.value = value;
  this.visited = false;
  this.neighbors = [null, null, null, null]; // left, right, up, down

  Node.prototype.addLeft = function(node) {
    this.neighbors[0] = node;
  }

  Node.prototype.addRight = function (node) {
    this.neighbors[1] = node;
  }

  Node.prototype.addUp = function(node) {
    this.neighbors[2] = node;
  }

  Node.prototype.addDown = function(node) {
    this.neighbors[3] = node;
  }
}

function BFS(root) {
  const queue = new Queue();
  queue.enqueue(root);
  root.visited = true;

  while(!queue.isEmpty()) {
   const currentNode = queue.dequeue();
   console.log('node value ', currentNode.value);
   for(let i = 0; i < currentNode.neighbors.length; i++) {
     const neighbor = currentNode.neighbors[i];
     if(neighbor === null) continue;
     if(neighbor.visited === false) {
       neighbor.visited = true;
       queue.enqueue(neighbor);
     }
   } 
  }


}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');

nodeA.addLeft(nodeB); 
nodeA.addRight(nodeC);

const nodeD = new Node('D');
const nodeE = new Node('E');

BFS(nodeA);


console.log('node a neighbors ', nodeA.neighbors);





