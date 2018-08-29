
/**
给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
返回所有不常用单词的列表。
您可以按任何顺序返回列表。
示例 1：
输入：A = "this apple is sweet", B = "this apple is sour"
输出：["sweet","sour"]
示例 2：
输入：A = "apple apple", B = "banana"
输出：["banana"]
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var findOnce = (arr) => {
        return arr.filter((item) => {
            return arr.indexOf(item) == arr.lastIndexOf(item);
        });
    }
    if(!A && !B){
        return [];
    }
    if(!A){
        return findOnce(A.split(' ')); 
    }
    if(!B){
        return findOnce(B.split(' '));
    }
    return [...findOnce(A.split(' ').concat(...B.split(' ')))];
};
/**
自己很脑残的一个解法。。。
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var findOnce = function(arr,hash){
        for(var i = 0;i < arr.length;i++){
            if(!hash[arr[i]]){
                hash[arr[i]] = 1;
            }
            else{
                hash[arr[i]]++;
            }
        }
        return hash;
    }
    var returnOnce = function(hash){
        var arr = [];
        for(var item in hash){
            if(hash[item] == 1){
                arr.push(item);
            }
        }
        return item;
    }
    var findRes = function(hasha,hashb,arr){
        for(var a in hasha){
            if(hasha[a] == 1 && !hashb[a]){
                arr.push(a);
            }
        }
        return arr;
    }
    if(!A){
        return returnOnce(findOnce(B.split(''),{}));
    }
    if(!B){
        return returnOnce(findOnce(A.split(''),{}));
    }
    var arr1 = A.split(' ');
    var arr2 = B.split(' ');
    var hash1 = findOnce(arr1,{});
    var hash2 = findOnce(arr2,{});
    return findRes(hash1,hash2,[]).concat(findRes(hash2,hash1,[]));
};
