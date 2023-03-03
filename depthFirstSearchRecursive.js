class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function depthFirstSearchRecursive(node) {
  if (node === null) return [];

  const leftTree = depthFirstSearchRecursive(node.left);
  const rightTree = depthFirstSearchRecursive(node.right);

  return [node.val, ...leftTree, ...rightTree];
}

function depthFirstSearchRecursive2(node, vals = { nodes: [] }) {
  if (node.val === null) return;

  vals.nodes.push(node.val);

  if (node.left) depthFirstSearchRecursive2(node.left, vals);
  if (node.right) depthFirstSearchRecursive2(node.right, vals);

  return vals.nodes;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(depthFirstSearchRecursive(a));
console.log(depthFirstSearchRecursive2(a));
