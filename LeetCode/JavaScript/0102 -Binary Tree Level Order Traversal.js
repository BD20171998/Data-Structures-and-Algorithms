/**
 * 102. Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
  if (!root) return [];

  let queue = [];
  let res = [];
  queue.push([root, 0]);

  while (queue.length) {
    let data = queue.shift();
    let node = data[0];
    let level = data[1];

    if (!res[level]) res[level] = [node.val];
    else res[level].push(node.val);

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  return res;
};
