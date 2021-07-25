/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val=== undefined ? 0 : val)
    this.next = (next=== undefined ? null : next)
}
 var partition = function(head, x) {

  const lessThanXarr = [];
  const moreThanXarr = [];

  // go over the list 
  // using 2 arrays, store the values that less than x  in 1 array and all greater than x in another
  let curNode = head;
  while(curNode) {
    if(curNode.val < x) {
      lessThanXarr.push(curNode);
    } else {
      moreThanXarr.push(curNode);
    }
    curNode = curNode.next;
  }

  //Go over both arrays and build out the list
  for(let i = 0; i < lessThanXarr.length - 1; i++){
    const curNode = lessThanXarr[i];
    const nextNode = lessThanXarr[i + 1];
    curNode.next = nextNode;
  }

  if(lessThanXarr.length > 0) lessThanXarr[lessThanXarr.length - 1].next = 
  moreThanXarr[0] ? moreThanXarr[0] : null;

  for(let i = 0; i < moreThanXarr.length - 1; i++) {
    const curNode = moreThanXarr[i];
    const nextNode = moreThanXarr[i + 1];
    curNode.next = nextNode;
  }

  if(moreThanXarr.length > 0) moreThanXarr[moreThanXarr.length - 1].next = null;


  if(lessThanXarr.length > 0) return lessThanXarr[0];
  else if(moreThanXarr.length > 0) return moreThanXarr[0];

  return null;
    
};

const node2 = new ListNode(2, null);
const node5 = new ListNode(5, node2);
const node2_2 = new ListNode(2, node5);
const node3 = new ListNode(3, node2_2);
const node4 = new ListNode(4, node3);
const head = new ListNode(1, null);

console.log(partition(head, 3));jjjjjjj