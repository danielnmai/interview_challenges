/*

Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
EXAMPLE
Input: A->8->C->D->E-> C[thesameCasearlier] Output: C

*/

function Node(val){
  this.val = val;
  this.next = null;
}

function getLoopStart(head){
  let slow = head;
  let fast = head;

  // Find the meeting point
  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;

    // break when they collide
    if(slow === fast){
      break;
    }
  }

  /* Since both slow and fast pointers will be k steps away from the loop start,
  if we keep moving them one node at a time in k steps, they will eventually 
  meet at the loop start
  */
  slow = head;

  // move both slow and head at the same pace
  // they will collide at the loop start node
  while(slow !== fast){
    fast = fast.next;
    slow = slow.next;
  }

  return fast; // or slow, since they are both the loop start node
}

const head = new Node(5);
const node7 = new Node(7);
const node1 = new Node(1);
const node4 = new Node(4);
const node6 = new Node(6);
const node2 = new Node(2);

head.next = node7;
node7.next = node1;
node1.next = node4;
node4.next = node6;
node6.next= node2;
node2.next = node1;

console.log(getLoopStart(head));

