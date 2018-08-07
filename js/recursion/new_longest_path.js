function Node(data){
    this.left = this.right = null
    this.data = data
    this.addLeft = function (node){
        this.left = node
    }
    this.addRight = function(node){
        this.right = node
    }
}
function visit(node){
    console.log(node.data)
}

function traverse(node) {
    if(node == null) return
    visit(node)
    if(node.left){
        traverse(node.left)
    }
    if(node.right){
        traverse(node.right)
    }
}
const longestUnivaluePath = (node) => {
    //Keep an array of all counts
    let counts = [], result = 0 
    //This function will return the longest possible path that passes each node
    //of the same value. Since a node has left branch and right branch
    //we need to traverse to both sides to get the longest path, and it will be the 
    //sum of longest extending left and longest extending right paths.
    function getLongestPath(node){
        //If we reach an empty node, return 0, i.e the longest path is 0.
        if(node == null) return 0
            //Call the function recursively so it will traverse
            //both branch to all nodes.
            let longestLeftPath = getLongestPath(node.left)
            let longestRightPath = getLongestPath(node.right)

            //Initialize the counts
            let countLeft = 0, countRight = 0

        //Whenever we see the node that has the same value, increment the count
        if(node.left != null && node.data == node.left.data){
            countLeft = longestLeftPath + 1            
        }
        if(node.right != null && node.data == node.right.data){
            countRight = longestRightPath + 1            
        }

        //After we get countLeft and countRight, sum them and push to the array of all counts
        counts.push(countLeft + countRight)

        //We're only interested in the longest path, so whatever number is higher,
        //we will return it.
        return Math.max(countLeft, countRight)
    }
    //Call the recursive function
    getLongestPath(node)
    //We have a list of counts for all paths that have same values.
    //We're only interested in the highest count, which is the longest univalue path.
    //So we return the highest value in the array of counts.
    result = Math.max(...counts)
    return result
}
let rootNode = new Node(1)
let node_A = new Node(1)
let node_B = new Node(5)
let node_C = new Node(1)
let node_D = new Node(1)
let node_F = new Node(5)

rootNode.addLeft(node_A)
rootNode.addRight(node_B)
node_B.addLeft(node_F)

node_A.addLeft(node_C)
node_A.addRight(node_D)


traverse(rootNode)
console.log('longest path')
console.log(longestUnivaluePath(rootNode))


