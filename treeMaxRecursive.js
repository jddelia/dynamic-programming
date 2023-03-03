// This function finds the maximum value in a binary tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeMaxRecursive(root, memo = { max: -Infinity }) {
  if (!root) return;
  memo.max = root.val > memo.max ? root.val : memo.max;
  treeMaxRecursive(root.left, memo);
  treeMaxRecursive(root.right, memo);
  return memo.max;
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

console.log(treeMaxRecursive(a));
