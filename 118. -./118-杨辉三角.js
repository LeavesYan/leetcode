/**
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
在杨辉三角中，每个数是它左上方和右上方的数的和。
示例:
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0){
        return [];
    }
    if(numRows == 1){
        return [[1]];
    }
    if(numRows == 2){
        return [[1],[1,1]];
    }
    var arr = [[1],[1,1]];
    for(var i = 2;i < numRows;i++){
        var row = [1];
        for(var j = 1;j < i;j++){
            row.push(arr[i-1][j-1]+arr[i-1][j]);
        }
        row.push(1);
        arr.push(row);
    }
    return arr;
};
