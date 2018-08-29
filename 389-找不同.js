/**
给定两个字符串 s 和 t，它们只包含小写字母。
字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
请找出在 t 中被添加的字母。 
示例:
输入：
s = "abcd"
t = "abcde"
输出：
e
解释：
'e' 是那个被添加的字母。
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(!s){
        return t;
    }
    var reSort = function(str){
        return str.split('').map(function(item){
            return item.charCodeAt();
        }).sort(function(a,b){
            return a - b;
        });
    }
    var rs = reSort(s);
    var rt = reSort(t);
    for(var i = 0;i < rs.length;i++){
        if(rs[i] != rt[i]){
            return String.fromCharCode(rt[i]);
        }
    }
    return String.fromCharCode(rt[i]);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(!s){
        return t;
    }
    var sum1 = 0,sum2 = 0;
    for(var i = 0;i < s.length;i++){
        sum1 += s[i].charCodeAt();
        sum2 += t[i].charCodeAt();
    }
    sum2 += t[i].charCodeAt();
    return String.fromCharCode(sum2 - sum1);
};
