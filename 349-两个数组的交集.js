/**
给定两个数组，编写一个函数来计算它们的交集。
示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
说明:
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0){
        return [];
    }
    var res = [];
    var hash = {};
    for(var i = 0;i < nums1.length;i++){
        if(!hash[nums1[i]]){
            hash[nums1[i]] = true;
        }
    }
    for(var n in hash){
        if(nums2.indexOf(parseInt(n)) != -1){
            res.push(parseInt(n));
        }
    }
    return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0){
        return [];
    }
    var res = [];
    var hash = {};
    nums1.forEach(function(num){
        if(!hash[num]){
            hash[num] = true;
        }
    });
    nums2.forEach(function(num){
        if(hash[num]){
            res.push(num);
            delete hash[num];
        }
    });
    return res;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1.length == 0 || nums2.length == 0){
        return [];
    }
    var set1 = new Set(nums1);
    var set2 = new Set(nums2); 
    var res = [...set1].filter(item => set2.has(item));
    return res;
};
