function Node(value) {
    this.value = value;
    this.neighbors = [];
    this.visited = false;
}


const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Depth-First Search
function dfs(node) {
    if(!node) return;
    node.visited = true;
    console.log(node.value);
    for(const neighbor of node.neighbors) {
        if(!neighbor.visited) dfs(neighbor);
    }
}

// Breath-First Search

function bfs(node) {
    const queue = [];
    queue.push(node);

    while(queue.length !== 0) {
        const curNode = queue.shift();
        curNode.visited = true;
        console.log('cur node bfs ', curNode);

        for(const neighbor of curNode.neighbors) {
            if(!neighbor.visited) queue.push(neighbor);
        }
    }
}

/*

1 -- 2
|    |
3 -- 4
*/
node1.neighbors.push(node2, node3);
node2.neighbors.push(node1, node4);
node3.neighbors.push(node1, node4);
node4.neighbors.push(node3, node2);

// dfs(node1);
bfs(node1);