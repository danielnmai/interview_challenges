/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var addTwoNumbers = function(l1, l2) {

    let head;
    let carry = 0;
    let curNode1 = l1;
    let curNode2 = l2;

    const values = [];

    while(curNode1 || curNode2) {
        const num1 = curNode1 ? curNode1.val : 0;
        const num2 = curNode2 ? curNode2.val : 0;

        const sum = num1 + num2 + carry;

        carry = sum > 9 ? 1 : 0;

        values.push(sum > 9 ? sum - 10 : sum);

        curNode1 = curNode1 ? curNode1.next : null;
        curNode2 = curNode2 ? curNode2.next : null;
    }

    if(carry > 0) {
        values.push(carry);
    }



    let node, temp;

    values.reverse().forEach(value => {
        if(!node) node = new ListNode(value, null);
        else {
            temp = new ListNode(value, null);
            temp.next = node;
            node = temp;
        }
    })

    return node;
    
};


 const node3 = new ListNode(3, null);
 const node4 = new ListNode(4, node3);
const node2 = new ListNode(2, node4);

const node4_2 = new ListNode(4, null);
const node6 = new ListNode(6, node4_2);
const node5 = new ListNode(5, node6);

addTwoNumbers(node2, node5);