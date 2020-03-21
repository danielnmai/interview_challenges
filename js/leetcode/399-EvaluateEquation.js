/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}

  equations = [ ["a", "b"], ["b", "c"] ],
  values = [2.0, 3.0],
  queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 * 
 */

 function Node(val){
   this.val = val;
   this.visited = false;
 }



function buildGraph(equations, values){
  const graph = new Map();
  for(let i = 0; i < equations.length; i++){
    let equation = equations[i];
    let value = values[i];

    const[first, second] = equation;

    if(!graph.has(first)){
      graph.set(first, new Map());
    }
    graph.get(first).set(second, value);

    if(!graph.has(second)){
      graph.set(second, new Map());
    }
    graph.get(second).set(first, 1 / value);
  }

  return graph;
}


function dfs(start, end, visited, graph){

  // If graph does not have this char, reject
  if(!graph.has(start)){
    return -1.0;
  }

  // return the product
  if(graph.get(start).has(end)){
    console.log('calling here');
    return graph.get(start).get(end);
  }
  visited.add(start);

  for(let entry of graph.get(start).entries()) {
    console.log('entry ', entry);
    if(!visited.has(entry[0])){
      const product = dfs(entry[0], end, visited, graph)
      if(product !== -1.0){
        return product * entry[1];
      }
    }
  }
  return -1.0;
}


var calcEquation = function(equations, values, queries) {
  const result = [];
  const graph = buildGraph(equations, values);
  for(let i = 0; i < queries.length; i++){
    const[start, end] = queries[i];
    result.push(dfs(start, end, new Set(), graph));
  }
  return result;    
};

const equations = [ ["a", "b"], ["b", "c"] ];
const values = [2.0, 3.0];
const queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ];

const graph =  buildGraph(equations, values);



// const result = calcEquation(equations, values, queries);
// console.log(result);

// search(nodeA, nodeA, nodeC);
// console.log(nodeA.neighbors.keys());

console.log(dfs('c', 'c', new Set(), graph));