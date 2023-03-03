// This function checks if a given value exists within a binary tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeIncludes(root, value) {
  let stack = [root];
  let current;

  while (stack.length > 0) {
    current = stack.pop();
    if (current.val === value) return true;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
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

console.log(treeIncludes(a, "f"));
console.log(treeIncludes(a, "h"));
