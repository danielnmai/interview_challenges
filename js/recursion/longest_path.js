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

function TreeNode(val){
    this.val = val
    this.left = this.right = null
    this.addLeft = function(node){
        this.left = node
    }
    this.addRight = function(node){
        this.right = node
    }
}
function visit(node){
    console.log(node.val)
}

let longestPath = 0
function traverse(node){
    if(node === null) return
    visit(node)
    if(node.left){
        if(node.left.val == node.val){
            longestPath++
            console.log('current longest path: (left) ' + longestPath)
            console.log('node left val: ' + node.left.val)
            console.log('node val: ' + node.left.val)
        }
        traverse(node.left)
    }
    if(node.right){
        if(node.right.val == node.val){
            longestPath++
            console.log('current longest path: (right) ' + longestPath)
        }
        traverse(node.right)
    }
}

let rootNode = new TreeNode(1)
let node_4A = new TreeNode(4)
let node_4B = new TreeNode(4)
let node_4C = new TreeNode(4)
let node_5A = new TreeNode(5)
let node_5B = new TreeNode(5)
rootNode.addLeft(node_4A)
rootNode.addRight(node_5A)
node_4A.addLeft(node_4B)
node_4A.addRight(node_4C)
node_5A.addRight(node_5B)

traverse(rootNode)
// console.log(longestPath)
