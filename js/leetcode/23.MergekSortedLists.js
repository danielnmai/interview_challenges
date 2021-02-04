/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const ar = [];

  for(const head of lists) {
    let curNode = head;
    while(curNode) {
      ar.push(curNode.val);
      curNode = curNode.next;
    }
  }

  const sortedAr = ar.sort((a, b) => a - b);

  let temporaryNode = null;
  for(let i = sortedAr.length - 1; i >= 0; i--) {
    if(!temporaryNode) {
      temporaryNode = new ListNode(sortedAr[i]);
    } else {
      const curNode = new ListNode(sortedAr[i]);
      curNode.next = temporaryNode;
      temporaryNode = curNode;
    }
  }


  let curNode = temporaryNode;

  while(curNode) {
    curNode = curNode.next;
  }

  return temporaryNode;
  
  
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head1 = new ListNode(1);
const node4_1 = new ListNode(4);
const node5_1 = new ListNode(5);
head1.next = node4_1;
node4_1.next = node5_1;

const head2 = new ListNode(1);
const node3_2 = new ListNode(3);
const node4_2 = new ListNode(4);
head2.next = node3_2;
node3_2.next = node4_2;

const head3 = new ListNode(2);
const node6_3 = new ListNode(6);
head3.next = node6_3;

console.log(mergeKLists([null]));



