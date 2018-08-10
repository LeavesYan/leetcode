/**
给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
示例 :
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
答案: 16
 * @param {number[][]} grid
 * @return {number}
 */
 /*大佬的代码*/
var islandPerimeter = function(grid) {
    for(var i = 0;i < grid.length;i++){
      for(var j = 0;j < grid.length;j++){
        if(grid[i][j]){
          lack++;
          if(j+1 < grid[i].length && grid[i][j+1]) count++;
          if(i+1 <grid.length && grid[i+1][j]) count++;
        }
      }
    }
    return(lack*4 - count*2);
}; 
/*本菜鸡的代码，看了之后觉得差距还是很大的，脑子还是需要转弯*/
var islandPerimeter = function(grid) {
    var reArr = new Array();
    reArr[0] = [];
    for(var i = 0;i < grid[0].length+2;i++){
        reArr[0].push(0);
    }
    for(var i = 0;i < grid.length;i++){
        grid[i].unshift(0);
        grid[i].push(0);
        reArr.push(grid[i]);
    }
    reArr[grid.length+1] = [];
    for(var i = 0;i < reArr[0].length;i++){
        reArr[grid.length+1].push(0);
    }
    var perimeter = 0;
    for(var m = 1;m<reArr.length-1;m++){
        for(var n = 1;n<reArr[0].length-1;n++){
            if(reArr[m][n] == 1){
                if(reArr[m-1][n] == 0){
                    perimeter++;
                }
                if(reArr[m+1][n] == 0){
                    perimeter++;
                }
                if(reArr[m][n-1] == 0){
                    perimeter++;
                }
                if(reArr[m][n+1] == 0){
                    perimeter++;
                }
            }
        }
    }
    return perimeter;
};
