/**
 * You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect city1 and city2 together.  (A connection is bidirectional: connecting city1 and city2 is the same as connecting city2 and city1.)

Return the minimum cost so that for every pair of cities, there exists a path of connections (possibly of length 1) that connects those two cities together.  The cost is the sum of the connection costs used. If the task is impossible, return -1.
 */

/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
  
};

function UnionFind(n){
  const parent = [];
  const rank = [];
  


}

function makeSet(){
  const singleton = { rank: 0};
  singleton.parent = singleton;
  return singleton;
}

function find(node){
 if(node.parent !== node){
  node.parent = find(node.parent);
 }
 return node.parent;
}

function union(nodeA, nodeB){
  let rootA = find(nodeA);
  let rootB = find(nodeB);

  if(rootA !== rootB){
    if(rootA.rank < rootB.rank){
      rootA.parent = rootB;
    } else{
      rootB.parent = rootA;
      if(rootB.rank === rootA.rank){
        rootA.rank += 1;
      }
    }
  }
}