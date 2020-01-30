const Queue = require('../data_structure/queue')

// const binaryTree = [3, 9, 20, null, null, 15, 7]



function Node (data) {
    this.data = data
    this.left = null
    this.right = null
    
    this.addLeft = function(node) {
        this.left = node
    }    
    this.addRight = function(node) {
        this.right = node
    }    
}

let isBST = true
let max = Number.MAX_VALUE
let min = Number.MIN_VALUE
function isValidBST(node, lNode = null, rNode = null){
    if(node == null) return true
    console.log(node.data)
   
    if(lNode && node.data < lNode.data){
        return false
    }

    if(rNode && node.data > rNode.data){
        return false
    }
    return isValidBST(node.left, lNode, node) && isValidBST(node.right, node, rNode)
}

let rootNode = new Node(0)
let nodeA = new Node(1)
let nodeB = new Node(4)
let nodeC = new Node(3)
let nodeD = new Node(6)

rootNode.addLeft(nodeA)
rootNode.addRight(nodeB)
nodeA.addLeft(null)
nodeB.addRight(null)
nodeB.addLeft(nodeC)
nodeB.addRight(nodeD)


console.log(isValidBST(rootNode))