/**
给定一个二进制数组， 计算其中最大连续1的个数。
示例 1:
输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：
输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(nums.length == 0){
        return 0;
    }
    var arr = [];
    var count = 0
    while(nums.length != 0){
        var num = nums.pop();
        if(num == 1){
            count ++;
        }
        else{
            arr.push(count);
            count = 0;
        }
    }
    arr.push(count);
    return Math.max.apply(null,arr);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var count = 0
    for(var i = 0;i < nums.length;i++){
        if(nums[i] == 1){
            count++;
            max = max > count ? max:count;
        }
        else{
            count = 0;
        }
    }
    return max;
};
