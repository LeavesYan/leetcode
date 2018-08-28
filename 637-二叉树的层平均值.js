/**
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
示例 1:
输入:
    3
   / \
  9  20
    /  \
   15   7
输出: [3, 14.5, 11]
解释:
第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root){
        return [];
    }
    var res = [];
    var arr = [];
    arr.push(root);
    while(arr.length){
        var len = arr.length;
        var sum = 0;
        for(var i = 0;i < len;i++){
            var node = arr.shift();
            sum += node.val;
            if(node.left){
                arr.push(node.left);
            }
            if(node.right){
                arr.push(node.right);
            }
        }
        res.push(sum/len);
    }
    return res;
};
