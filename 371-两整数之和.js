/**
  不使用运算符 + 和-，计算两整数a 、b之和。
  示例：
  若 a = 1 ，b = 2，返回 3。
 * @param {number} a
 * @param {number} b
 * @return {number}.
 解题思路：
 a,b相加，不考虑进位时，结果是a^b，即1^1=0 1^0=1 0^1=1 0^0=0 
 a,b相加，仅当二者均为1时才需要进位，即(a&b)<<1(进位需要左移一位)
 a+b可以理解为(a xor b) + (a & b)<<1,以此类推，一直到不需要进位为止
 */
var getSum = function(a, b) {
    while(a!=0){
        var temp = (a&b)<<1;
        b = a^b;
        a = temp;
    }
    return b;
};
