/**
示例1:
输入: ["Hello", "Alaska", "Dad", "Peace"]
输出: ["Alaska", "Dad"]
注意:
你可以重复使用键盘上同一字符。
你可以假设输入的字符串将只包含字母。
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var first = /[qwertyuiop]*/i;
    var second = /[asdfghjkl]*/i;
    var third = /[zxcvbnm]*/i;
    var arr = [];
    words.forEach(function(word){
        if(first.exec(word)[0]==word||second.exec(word)[0]==word||third.exec(word)[0]==word){
            arr.push(word);
        }
    })
    return arr;
};
