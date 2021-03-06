/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:
必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length <= 1 || nums.indexOf(0) == -1){
        return;
    }
    var count = 0;
    var idx = nums.indexOf(0);
    while(idx != -1){
        nums.splice(idx,1);
        count++;
        idx = nums.indexOf(0);
    }
    for(var i = 0;i < count;i++){
        nums.push(0);
    }
    return;
};
/**
优化版的解答
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var i = nums.length - 1;i >= 0;i--){
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
};
