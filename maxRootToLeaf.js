// This function finds the largest sum "root to leaf" path.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxRootToLeaf(
  root,
  memo = { max: -Infinity, currentPath: [], paths: [] }
) {
  if (!root) return;

  memo.currentPath.push(root.val);
  if (!root.left && !root.right) {
    memo.paths.push(memo.currentPath);
    const total = memo.currentPath.reduce((acc, curr) => acc + curr);
    memo.max = memo.max < total ? total : memo.max;
    return true;
  }

  if (maxRootToLeaf(root.left, memo))
    memo.currentPath = memo.currentPath.slice(0, memo.currentPath.length - 1);
  if (maxRootToLeaf(root.right, memo))
    memo.currentPath = memo.currentPath.slice(0, memo.currentPath.length - 1);
  return memo.max;
}

function maxRootToLeaf2(root) {
  if (!root.left && !root.right) {
    return [root.val];
  }

  const left = root.left ? maxRootToLeaf2(root.left) : -Infinity;
  const right = root.right ? maxRootToLeaf2(root.right) : -Infinity;

  return root.val + Math.max(left, right);
}

const a = new Node(10);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
// const g = new Node(7);
// const h = new Node(8);
// const i = new Node(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
// c.right = g;
// d.left = h;
// g.right = i;

console.log(maxRootToLeaf(a));
console.log(maxRootToLeaf2(a));
