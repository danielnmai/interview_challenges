function Node (data) {
    this.data = data
    this.next = null
    }

function SinglyList(){
    this.head = null
 
    this.add = function(data){
        let last = new Node(data)
        let currentNode = this.head
        //empty list
        if(!currentNode){
            this.head = last
            return last
        }
        //non-empty list
        while(currentNode.next){
            currentNode = currentNode.next
        }
        currentNode.next = last
        return last
    }


    this.remove = function(prevNode, node){
        if(!node) { return null }
        //the delete node is the head
        if(this.head == node){
            this.head = node.next
            delete node
        }
        //the delete node is the tail
        if(node.next == null){
            prevNode.next == null
            delete node
        }
        else {
            //The delete node is in the middle of list
            prevNode.next = node.next
            delete node
        }
        
    }
    this.removeDups = function () {
        if(!this.head) { return null }
        let hash = {}
        let prevNode = this.head
        let node = this.head.next
        let count = 0
        while(node){
            console.log('Node val: ' + node.data)
            if(hash.hasOwnProperty(node.data)){
                this.remove(prevNode, node)
                console.log('Remove duplicate: ' + node.data)
            }
            else {
                hash[node.data] = 1
            }
            prevNode = node
            node = node.next
            count++
        }
        console.log(hash)
        console.log('count: ' + count)
    }

    this.printList = function(){
        if(!this.head){
            console.log('Empty list')
        }
        let node = this.head
        while(node.next){
            console.log(node.data) 
            node = node.next                       
        }
    }
}

let list = new SinglyList()
list.add(2)
list.add(3)
list.add(1)
list.add(5)
list.add(5)
list.add(2)
list.add(1)
list.add(2)
// list.removeDups()

console.log(list.printList())
