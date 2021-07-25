const Queue = require('./queue')

// const binaryTree = [3, 9, 20, null, null, 15, 7]

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
    
    this.addLeft = function(node) {
        this.left = node
    }    
    this.addRight = function(node) {
        this.right = node
    }    
}


function traverseBF(node){
    let queue = new Queue()

    queue.enqueue(node)

    while(!queue.isEmpty()){

        let currentNode = queue.dequeue()

        console.log(currentNode.value)

        if (currentNode.left){
            queue.enqueue(currentNode.left)
        }
        if(currentNode.right){
            queue.enqueue(currentNode.right)
        }
    }     
}

function insertBST(curNode, value) {

    if(value > curNode.value) {
        if(curNode.right) insertBST(curNode.right, value);
        else {
            const newNode = new Node(value);
            curNode.right = newNode;
            return;
        }
    } else {
        if(curNode.left) insertBST(curNode.left, value);
        else {
            const newNode = new Node(value);
            curNode.left = newNode;
            return;
        }
    }
}

/*
            9
        3       20
            15      27
*/
function searchBST(node, value) {
    if(!node) return null;

    if(node.value === value) return node;
    else if(node.value > value) return searchBST(node.left, value);
    else if(node.value < value) return searchBST(node.right, value);
}

function searchBSTIterative(node, value) {
    let curNode = node;
    while(true) {
        // you at the leaf and we could not find the node, return null
        if(!curNode) return null;
        else if(curNode.value > value) {
            curNode = curNode.left;
        } else if(curNode.value < value) {
            curNode = curNode.right;
        } else if(curNode.value === value) {
            return curNode;
        }
    }
}

function traverseDF(node) {
    if(!node) return;
    if(node.left) traverseDF(node.left);
    console.log('node val ', node.value);
    if(node.right) traverseDF(node.right);
}

let rootNode = new Node(9)
let node_3 = new Node(3)
let node_20 = new Node(20)
let node_15 = new Node(15)
let node_27 = new Node(27)

rootNode.addLeft(node_3)
rootNode.addRight(node_20)
node_20.addLeft(node_15)
node_20.addRight(node_27)

insertBST(rootNode, 12);

// traverseBF(rootNode)
//traverseDF(rootNode);

console.log(searchBSTIterative(rootNode, 3));

