function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

const root = new Node(-10);
const node9 = new Node(9);
const node5 = new Node(5);
const node20 = new Node(20);
const node45 = new Node(45);


root.left = node9;
root.right = node5;

node5.left = node20;
node5.right = node45;


/*
      -10
      /  \
    9     5
        /   \
      20    45
*/


let globalMax = 0;

function findMaxSumPath(node){
  if(node === null){
    return 0;
  }

  const leftSum = findMaxSumPath(node.left);
  const rightSum = findMaxSumPath(node.right);

  const maxLeftRightSum = Math.max(leftSum, rightSum);

  const returnMax = Math.max(maxLeftRightSum + node.value, node.value);

  const max = Math.max(returnMax, node.value + leftSum + rightSum);
  
  if(max > globalMax){
    globalMax = max;
  }

  return returnMax;

}

findMaxSumPath(root);

console.log(globalMax);


