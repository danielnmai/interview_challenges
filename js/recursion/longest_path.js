/* Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.
 Note: The length of path between two nodes is represented by the number of edges between them.

Input:        5
             / \
            4   5
           / \   \
          1   1   5
Output: 2

Input:        1
             / \
            4   5
           / \   \
          4   4   5
Output: 2
*/

function TreeNode(data){
    this.data = data
    this.left = this.right = []
    this.addLeft = function(node){
        this.left.push(node)
    }
    this.addRight = function(node){
        this.right.push(node)
    }
}
function visit(node){
    console.log(node.data)
}

function traverse(node){
    if(node === null) return
    //print out node data
    visit(node)
    //visit left branch
    for(node of node.left) traverse(node)
    //visit right branch
    for(node of node.right) traverse(node)
}

let rootNode = new TreeNode(1)
let node_4A = new TreeNode(4)
let node_4B = new TreeNode(4)
let node_4C = new TreeNode(4)
let node_5A = new TreeNode(5)
let node_5B = new TreeNode(5)

//add root node branches
rootNode.addLeft(node_4A)
rootNode.addRight(node_5A)

node_4A.addLeft(node_4B)
node_4A.addRight(node_4C)
node_5A.addRight(node_5B)

traverse(rootNode)
