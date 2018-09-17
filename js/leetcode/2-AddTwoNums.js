function Node(data) {
    this.data = data
    this.next = null
}

function List() {
    this.head = null
    this.add = function (data) {
        let node = new Node(data)
        if(!this.head){
            this.head = node
            return node
        }
        let curNode = this.head
        while(curNode.next){
            curNode = curNode.next
        }
        curNode.next = node
        return curNode
    }
    this.print = function () {
        let node = this.head
        while(node){
            console.log(node.data)
            node = node.next
        }
    }
}

const addTwoNumbers = function(l1, l2) {
    
}

let list = new List()
list.add(2)
list.add(4)
list.add(3)
list.print()