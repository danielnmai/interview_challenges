
/*
Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.
*/

function Node(val){
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function findInOrderSuccessor(node){
  if(node === null){
    return null;
  }
  // If node has right child: the successor is the node on this right subtree 
  // with the smallest value greater than the input node
  if(node.right){
    return findMinNode(node.right, node.right);
  }
  // If node does not have right child: the successor is the ancestor with the smallest value greater than the input node
  return findMinInAncestors(node);

}

function findMinInAncestors(node){
  let successorNode = null;
  let curNode = node.parent;
  while(curNode !== null){
    if(curNode.val > node.val){
      if(!successorNode){        
        successorNode = curNode;
      }      
    }
    if(curNode.val > node.val && curNode.val < successorNode.val){
      successorNode = curNode;
    }
    curNode = curNode.parent;
  }
  return successorNode;
}

function findMinNode(node, minNode){
  if(node === null) {
    return minNode;
  }
  if(node.val < minNode.val){
    minNode = node;
  }
  return findMinNode(node.left, minNode);
}
const node8 = new Node(8);
const node12 = new Node(12);
const node10 = new Node(10);
const node9 = new Node(9);
const node15 = new Node(15);
const node5 = new Node(5);
const node4 = new Node(4);
const node7 = new Node(7);

/*

                8
              /   \
            5      12
          /  \    /  \
        4     7  10   15
                /
              9

*/              

node8.left = node5;
node5.parent = node8;
node8.right = node12;
node12.parent = node8;

node10.left = node9;
node9.parent = node10;

node12.left = node10;
node10.parent = node12;
node12.right = node15;
node15.parent = node12;

node5.left = node4;
node4.parent = node5;
node5.right = node7;
node7.parent = node5;

// console.log(findMinNode(node8.right, node8.right));
console.log(findInOrderSuccessor(node9));
// console.log('node 7 parent', node7.parent);
// console.log('node 5 parent', node7.parent.parent);





