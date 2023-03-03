// This function sums up the values in a binary tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function treeSum(root) {
  let result = 0;
  let stack = [root];
  let current;
  while (stack.length > 0) {
    current = stack.pop();
    result += current.val;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return result;
}

function treeSumQueue(root) {
  let result = 0;
  let queue = [root];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    result += current.val;

    if (current.right) queue.push(current.right);
    if (current.left) queue.push(current.left);
  }

  return result;
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

console.log(treeSum(a));
console.log(treeSumQueue(a));
