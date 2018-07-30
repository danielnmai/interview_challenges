function Node(data){
    this.data = data
    this.children = []
    this.visited = false

    this.add = function(node){
        this.children.push(node)
    }
}
function visit(node){
    node.visited = true
    console.log('Node Name: ' + node.data)
}
function traverseDF(node){
    if (node == null) return
    visit(node)
    for(let i = 0; i < node.children.length; i++){
        let currentNode = node.children[i]
        if(currentNode.visited == false){
            traverseDF(currentNode)
        }
    }
}

let rootNode = new Node(3)
nodeA = new Node(9)
nodeB = new Node(20)
nodeC = new Node(15)
nodeD = new Node(7)
// nodeE = new Node('E')
// nodeF = new Node('F')
// nodeG = new Node('G')
// nodeH = new Node('H')
// nodeI = new Node('I')

//rootNode children
rootNode.add(nodeA)
rootNode.add(nodeB)


//Node A children & grandchildren
// nodeB.add(nodeC)
// nodeB.add(nodeD)
// nodeC.add(nodeE)
// nodeD.add(nodeF)

//Node B children and grandchildren
nodeB.add(nodeC)
nodeB.add(nodeD)
// nodeG.add(nodeI)

console.log(rootNode)
traverseDF(rootNode)


