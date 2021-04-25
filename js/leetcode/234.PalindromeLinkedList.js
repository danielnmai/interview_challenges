/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    
  let curNode = head;
  const array = [];
  
  while(curNode) {
      array.push(curNode.val);
      curNode = curNode.next;
  }
  
  let i = 0;
  let j = array.length - 1;
  
  while(i <= j) {
      if(array[i] !== array[j]) return false;
      i++;
      j--;
  }
  
  return true;
};
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// const node1_2 = new ListNode(1, null)
// const node2_2 = new ListNode(2, node1_2);

const node2_1 = new ListNode(2, null);
const node1_1 = new ListNode(1, node2_1);

console.log(isPalindrome(node1_1));


