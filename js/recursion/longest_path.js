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

const longestUnivaluePath = function(root) { 
    let answer = 0
    pathLength(root)
    return answer

    function pathLength(node){
        if (node == null) return 0
        let left = pathLength(node.left)
        let right = pathLength(node.right)

        let pathLeft = 0, pathRight = 0
        if(node.left != null && node.left.val == node.val){
            pathLeft += left + 1
        }
        if(node.right != null && node.right.val == node.val){
            pathRight += right + 1
        }
        answer = Math.max(answer, pathLeft + pathRight)
        return Math.max(pathLeft, pathRight)
    }
    
}

function traverse(node){
    
    if (node == null) return

    if(node.left){
        traverse(node.left)
    }
    if(node.right){
        traverse(node.right)
    }
    console.log('I have returned to node '+ node.val)
}


let rootNode = new TreeNode(5)
let node_A = new TreeNode(2)
let node_B = new TreeNode(5)
let node_C = new TreeNode(3)
let node_D = new TreeNode(4)
let node_E = new TreeNode(6)
let node_F = new TreeNode(7)
rootNode.addLeft(node_A)
rootNode.addRight(node_B)
node_A.addLeft(node_C)
node_A.addRight(node_D)
node_B.addLeft(node_E)
node_B.addRight(node_F)

// traverse(rootNode)
console.log(longestUnivaluePath(rootNode))

