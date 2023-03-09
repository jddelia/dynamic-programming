// This function finds the maximum value in a binary tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeMax(root) {
  let max = root.val;

  let stack = [root];
  let current;
  while (stack.length > 0) {
    current = stack.pop();
    if (current.val > max) max = current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return max;
}

function treeMaxQueue(root) {
  let max = root.val;

  let queue = [root];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.val > max) max = current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return max;
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

console.log(treeMax(a));
console.log(treeMaxQueue(a));
