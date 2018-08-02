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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let totalPaths = []

var longestUnivaluePath = function(root) {    
    
    if(root == null) return 0
    
    if(root.left == null && root.right == null)  return 0
    
    function traverse (node){
        if(node === null) return
        let currentPath = [node.val]
        if(node.left) {
            if(node.val == node.left.val){
                currentPath.push(node.val)
            }
            totalPaths.push(currentPath)
        traverse(node.left)
    }
        if(node.right) {
            if(node.val == node.right.val){
                currentPath.push(node.val)
            } 
            totalPaths.push(currentPath)
            traverse(node.right)
        }
    }
    
    traverse(root)
    
    //return longest path
    console.log(totalPaths)
    return Math.max(...totalPaths.map( path => path.length  - 1))
};

let rootNode = new TreeNode(5)
let node_A = new TreeNode(4)
let node_B = new TreeNode(5)
let node_C = new TreeNode(1)
let node_D = new TreeNode(1)
let node_E = new TreeNode(5)
rootNode.addLeft(node_A)
rootNode.addRight(node_B)
node_A.addLeft(node_C)
node_A.addRight(node_D)
node_B.addRight(node_E)

// traverse(rootNode)
console.log(longestUnivaluePath(rootNode))
