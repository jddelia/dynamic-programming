// This function finds the minimum value in a binary tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeMinRecursive(root, memo = { min: Infinity }) {
  if (!root) return;
  memo.min = root.val < memo.min ? root.val : memo.min;
  treeMinRecursive(root.left, memo);
  treeMinRecursive(root.right, memo);
  return memo.min;
}

const a = new Node(10);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeMinRecursive(a));
