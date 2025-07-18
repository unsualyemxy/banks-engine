/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0

    function maxdepth(root: TreeNode | null): number{
    if(root == null) return 0

    const leftHeight = maxdepth(root.left)
    const rightHeight = maxdepth(root.right)

    diameter = Math.max(diameter, leftHeight + rightHeight)

    return 1 + Math.max(leftHeight, rightHeight)}

    maxdepth(root)
    return diameter
};