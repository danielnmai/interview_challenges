/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  // Build a graph
  let minSteps = 0;

  // 6 1 9
  function Node(value, index){
    this.neighbors = [];
    this.value = value;
    this.index = index;
    this.visited = false;

    Node.prototype.addNeighbor = function(neighbor){
      let isAlreadyNeighbor = false;
      for(let i = 0; i < this.neighbors.length; i++) {
        const curNode = this.neighbors[i];
        if(curNode.value === neighbor.value && curNode.index === neighbor.index) {
          isAlreadyNeighbor = true;
          break;
        }
      }
      if(!isAlreadyNeighbor) this.neighbors.push(neighbor);
    }
  }
  function Graph(){
    this.nodes = [];

    Graph.prototype.addNode = function(node) {
      this.nodes.push(node);
      for(let i = 0; i < this.nodes.length; i++){
        const curNode = this.nodes[i];
        if(curNode.index !== node.index && curNode.value === node.value) {
          node.addNeighbor(curNode);
          curNode.addNeighbor(node);
        }
      }
    }

    Graph.prototype.addSameNodes = function(node){
      for(let i = 0; i < this.nodes.length; i++){
        const curNode = this.nodes[i];
        if(curNode.index !== node.index && curNode.value === node.value) {
          node.addNeighbor(node);
        }
      }
    }
  }
  function Queue() {
    this.data = [];

    Queue.prototype.enqueue = function(item) {
      this.data.push(item);
    }
    Queue.prototype.dequeue = function() {
      if(this.data.length === 0) return null;
      return this.data.shift();
    }
    Queue.prototype.isEmpty = function() {
      return this.data.length === 0;
    }
  }

  const graph = new Graph();

  for(let i = 0; i < arr.length; i++) {
    const value =  arr[i];
    const curNode = new Node(value, i);

    // add neighbor i - 1
    if(i - 1 >= 0) {
      const prevNode = new Node(arr[i - 1], i - 1);
      prevNode.addNeighbor(curNode);
      curNode.addNeighbor(prevNode);
    }
    // add neighbor i + 1
    if(i + 1 < arr.length) {
      const nextNode = new Node(arr[i + 1], i + 1);
      nextNode.addNeighbor(curNode);
      curNode.addNeighbor(nextNode);
    }
    graph.addNode(curNode);
  }

  // Use BFS to find the min jump  
  const queue = new Queue();

  console.log('grapth ', graph);

  // add first node to queue
  queue.enqueue(graph.nodes[0]);

  while(!queue.isEmpty()) {
    const curNode = queue.dequeue();
    curNode.visited = true;


    curNode.neighbors.sort((neighborA, neighborB) => neighborB.index - neighborA.index);

    for(let i = 0; i < curNode.neighbors.length; i++) {
      const neighbor = curNode.neighbors[i];
      if(!neighbor.visited) {
        if(neighbor.index === arr.length - 1) {
          console.log('neighbor ', neighbor);
          console.log('min steps ', minSteps);
          return minSteps;
        }
        queue.enqueue(neighbor);
      }
    }
    minSteps++;
  }
  console.log('lol');
  return -1;
  
};


const arr = [100,-23,-23,404,100,23,23,23,3,404]
console.log('min jumps ', minJumps(arr));