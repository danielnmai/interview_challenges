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

    this.removeDups = function() {
        let hash = {}
        
    }

    this.remove = function(data){
        if(!this.head){ return null }
        let previousNode = this.head
        let currentNode = this.head.next
        while(currentNode.next){
            if(currentNode.data == data){
                previousNode.next = currentNode.next
                delete currentNode
            }
            previousNode = currentNode
            currentNode = currentNode.next
        }
    }
    this.removeDups = function () {
        if(!this.head) { return null }
        let hash = {}
        let node = this.head
        while(node.next){
            if(hash.hasOwnProperty(node.data)){
                this.remove(node.data)
            }
            else {
                hash[node.data] = 1
            }
            console.log(hash)
            node = node.next
        }
        console.log(node)
        // if(hash.hasOwnProperty(node.data)){
        //     this.remove(node.data)
        // }
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
        console.log(node.data)
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

// list.remove(5)
list.remove(1)
// list.removeDups()

console.log(list.printList())
