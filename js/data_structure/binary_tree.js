// const binaryTree = [3, 9, 20, null, null, 15, 7]

function Node(data) {
    this.data = data
    this.left = []
    this.right = []
    this.addLeft = function(node) {
        this.left.push(node)
    }    
    this.addRight = function(node) {
        this.right.push(node)
    }    
}

function levelOrder(node){
    
}

function traverseBF(node){

}

let rootNode = new Node(3)
let node_9 = new Node(9)
let node_20 = new Node(20)
let node_15 = new Node(15)
let node_7 = new Node(7)

rootNode.addLeft(node_9)
rootNode.addRight(node_20)
node_20.addLeft(node_15)
node_20.addRight(node_7)




console.log(rootNode)

