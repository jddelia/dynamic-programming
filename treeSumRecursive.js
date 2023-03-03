// This function sums up the values in a binary tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeSumRecursive(root) {
  if (!root) return 0;
  return root.val + treeSumRecursive(root.left) + treeSumRecursive(root.right);
}

const a = new Node(1);
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

console.log(treeSumRecursive(a));
