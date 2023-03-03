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

function treeIncludesQueue(root, value) {
  let queue = [root];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.val === value) return true;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
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
console.log(treeIncludesQueue(a, "f"));
console.log(treeIncludesQueue(a, "h"));
