/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 var sortedListToBST = function(head) {


    
  function balanceCurNode(curNode, parentCurNode) {
      const curNodeLeft = curNode.left;
      
      parentCurNode.left = curNodeLeft;
      curNodeLeft.right = curNode;
  }

  balanceCurNode(head.left, head);

  return head.left;
  
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


const nodem5 = new TreeNode(-5, null, null);

const nodem4 = new TreeNode(-4, nodem5, null);
const node2 = new TreeNode(2, nodem4, null);


console.log(sortedListToBST(node2));

