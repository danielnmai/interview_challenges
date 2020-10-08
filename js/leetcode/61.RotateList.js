/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head === null) return null;
  if(head.next === null) return head;
  
  // Find the old tail and connect it to the head
  // Compute n as the same time
  let oldTail = head;
  let n = 1;
  while(oldTail.next){
    oldTail = oldTail.next;
    n++;
  }
  oldTail.next = head;

  // find the new tail, which is (n - k % n - 1) from the head
  let i = 0;
  let newTail = head;
  let newHead;
  while(i < (n - k % n - 1)){
    newTail = newTail.next;
    i++;
  }
  // Set the new head to be the one right after the breaking point
  newHead = newTail.next;
  newTail.next = null;

  return newHead;
};

function printList(head){
  let curNode = head;
  while(curNode){
    console.log(curNode.val);
    curNode = curNode.next;
  }
}

function ListNode(val, next) {
  this.val = (val=== undefined ? 0 : val)
  this.next = (next=== undefined ? null : next)
}

const node5 = new ListNode(5, null)
const node4 = new ListNode(4, node5)
const node3 = new ListNode(3, node4)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)

rotateRight(node1, 1)
printList(node5)

