/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}
 */
var findRoot = function(tree) {

  const seen = new Set();

  for(const node of tree) {
    for(const child of node.children) {
      seen.add(child.val);
    }
  }

  let root = null;

  for(const node of tree) {
    if(!seen.has(node.val)) {
      root = node;
    }
  }

  return root;
    
};