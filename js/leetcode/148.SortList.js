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
 * 
 * 
 * Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var sortList = function (head) {
  let newHead = head;

  function isSorted(curHead) {
    let curNode = curHead;
    let alreadyChangedHead = false;
    while (curNode.next ) {
      if (curNode.val > curNode.next.val) {
        if(!alreadyChangedHead) {
          newHead = curNode.next;
          alreadyChangedHead = true;
        }
        return false;
      }
    }
    return true;
  }

  while(!isSorted(newHead)) {
    swapNext2Nodes(newHead);
  }

  function swapNext2Nodes(curNode) {
    let nextNode = curNode.next;
    curNode.next = nextNode.next;
    nextNode.next = curNode;
  }

  return newHead;
};

function printList(head) {
  let curNode = head;
  while (curNode) {
    console.log('curNode ', curNode);
    curNode = curNode.next;
  }
}

const node3 = new ListNode(3, null)
const node1 = new ListNode(1, node3)
const node2 = new ListNode(2, node1)
const node4 = new ListNode(4, node2)

// swapNext2Nodes(node4)
const newHead = sortList(node4);

printList(newHead);