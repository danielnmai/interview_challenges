/**
 * 
 * A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).

Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.

Implement your function in the most efficient manner and analyze its time and space complexities.

For example:

Given the rootNode of the tree in diagram above

                    0
                  / | \
                5   3   6
              /   /  \  | \
            4    2    0 1  5
                /    /
               1    10
              /
            1

    depth-first traversal:
    0 -> 5 -> 4 => cost 9 store 9 as current minCost
    0 -> 3 -> 2 -> 1 -> => cost 6 is smaller than minCost? yes => minCost = 6

 */
function Node(cost){
  this.cost = cost;
  this.children = [];
}
function getCheapestCost(rootNode) {
  if(rootNode.children.length === 0){
    return rootNode.cost;
  }
  
  let minCost = Number.MAX_SAFE_INTEGER;
 
  for(let i = 0; i < rootNode.children.length; i++){
    let curNode = rootNode.children[i];
    let cost = getCheapestCost(curNode); // 0 + 5 + 4
    if(cost < minCost){
      minCost = cost;
    }    
  }
  return rootNode.cost + minCost;  
}


function printNode(node){
  if(!node) return;
  for(let i = 0; i < node.children.length; i++){
    let curNode = node.children[i];
    printNode(curNode);
  }
}

/*

for each rootNode children:
  node5: return 9
    for each node5 children:
      node 4: return 4

*/

const root = new Node(0);
const node5_A = new Node(5);
const node5_B = new Node(5);
const node4 = new Node(4);
const node3 = new Node(3);
const node6 = new Node(6);
const node2 = new Node(2);
const node0 = new Node(0);
const node1_A = new Node(1);
const node1_B = new Node(1);
const node1_C = new Node(1);
const node10 = new Node(10);

root.children.push(node5_A);
root.children.push(node3);
root.children.push(node6);

node5_A.children.push(node4);

node3.children.push(node2);
node3.children.push(node0);

node2.children.push(node1_A);
node1_A.children.push(node1_B);

node0.children.push(node10);

node6.children.push(node1_C);
node6.children.push(node5_B);

// printNode(root);
console.log(getCheapestCost(root));










