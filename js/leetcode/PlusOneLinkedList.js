/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var plusOne = function(head) {˜

  let newHead = head;
  let isAllNine = true;
  let nodeBeforeFirst9;
// handle adding 1 to numbers such as 99, 999. In that case, we'd need to make it to 100, 1000
function isSpecialCase(head) {
    let curNode = head;

    while(curNode.next) {
        if(curNode.val !== 9) isAllNine = false;
        if(curNode.next.val === 9 && curNode.val !== 9) { 
          nodeBeforeFirst9 = curNode;
        };
        curNode = curNode.next;
    }
    return curNode.val === 9;
}



if(isSpecialCase(head)){
  if(isAllNine) {
    newHead = new ListNode(1, head);
    let curNode = head;
    while(curNode) {
      curNode.val = 0;
      curNode = curNode.next;
    }
  } else {
    nodeBeforeFirst9.val++;
    let curNode = nodeBeforeFirst9.next;
    while(curNode) {
      curNode.val = 0;
      curNode = curNode.next;
    }
  }

 
} else {
  let curNode = head;
  while(curNode.next) {
    curNode = curNode.next;
  }
  curNode.val += 1;
}


return newHead;

};

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 const node4 = new ListNode(9, null);
 const node3 = new ListNode(9, null);
 const node2 = new ListNode(9, node3);
const head = new ListNode(8, node2);
// const head1 = new ListNode(1, null);




console.log(plusOne(head));
// console.log(plusOne(head1));