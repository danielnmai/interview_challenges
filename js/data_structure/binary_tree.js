const Queue = require('./queue')

// const binaryTree = [3, 9, 20, null, null, 15, 7]

function Node(data) {
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


function traverseBF(node){
    let queue = new Queue()

    queue.enqueue(node)

    while(!queue.isEmpty()){

        let currentNode = queue.dequeue()
        
        console.log(currentNode.data)

        if (currentNode.left){
            queue.enqueue(currentNode.left)
        }
        if(currentNode.right){
            queue.enqueue(currentNode.right)
        }
    }     
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

traverseBF(rootNode)

