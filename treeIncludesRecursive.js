// This function checks if a given value exists within a binary tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeIncludesRecursive(root, value) {
  if (!root) return false;
  if (root.val === value) return true;

  return (
    treeIncludesRecursive(root.left, value) ||
    treeIncludesRecursive(root.right, value)
  );
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

console.log(treeIncludesRecursive(a, "f"));
console.log(treeIncludesRecursive(a, "h"));
