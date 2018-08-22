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
}

let list = new SinglyList()
console.log(list)
