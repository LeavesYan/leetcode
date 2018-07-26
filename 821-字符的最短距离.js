/**
  给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
  示例 1:
  输入: S = "loveleetcode", C = 'e'
  输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
  说明:
  字符串 S 的长度范围为 [1, 10000]。
  C 是一个单字符，且保证是字符串 S 里的字符。
  S 和 C 中的所有字母均为小写字母。
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 解题思路：
 先将字符串S转化为一个数组，声明一个变量pre并赋初值为第一个字符C所在位置
 用一个变量i正面遍历该数组，将字符C所在的位置保存为pre，并将结果数组此位置的值设为0，其他位置的值为i减pre的绝对值
 反面遍历以同样的方法，比较正面遍历的结果，取最小值，返回结果数组
 */
var shortestToChar = function(S, C) {
    var arr = S.split('');
    var pre = arr.indexOf(C);
    var result = [];
    for(var i = 0;i < arr.length;i++){
        if(arr[i] == C){
            result[i] = 0;
            pre = i;
        }
        else{
            result[i] = Math.abs(i - pre);
        }
    }
    pre = arr.lastIndexOf(C);
    for(var j = arr.length - 1;j >= 0;j--){
        if(arr[j] == C){
            pre = j;
        }
        else{
            result[j] = Math.min(Math.abs(j-pre),result[j]);
        }
    }
    return result;
};
/*
 其他大佬的解题思路：
 声明一个结果数组result，长度和字符串S的长度相同，并且result的每一项的值均为S.length
 声明一个变量c并赋初值为第一个字符C所在的位置，c的用途类似与指针，指向字符C的位置
 用i遍历字符串S，比较i减c的绝对值与result[i]的大小，小的成为新的result[i]
 遍历完后，将c指向下一个字符C所在的位置
*/
var shortestToChar = function(S, C) {
    var c = S.indexOf(C);
    var result = [];
    for(var i = 0;i < S.length;i++){
        result.push(S.length);
    }
    while(c != -1){
        for(var i = 0;i < S.length;i++){
            result[i] = Math.abs(i - c) < result[i] ? Math.abs(i - c):result[i];
        }
        c = S.indexOf(C,c+1);
    }
    return result;
};
