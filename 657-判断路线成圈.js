/*
初始位置 (0, 0) 处有一个机器人。给出它的一系列动作，判断这个机器人的移动路线是否形成一个圆圈，换言之就是判断它是否会移回到原来的位置。
移动顺序由一个字符串表示。每一个动作都是由一个字符来表示的。机器人有效的动作有 R（右），L（左），U（上）和 D（下）。输出应为 true 或 false，表示机器人移动路线是否成圈。
示例 1:
输入: "UD"
输出: true
示例 2:
输入: "LL"
输出: false
*/
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    /*第一次写的比较复杂，可以不用定义四个变量，直接声明一个长度为4的数组，每一个方向对应数组中的一个元素，再比较数组元素的大小*/
    var u_num = 0,d_num = 0,r_num = 0,l_num = 0;
    for(var i = 0;i<moves.length;i++){
        switch(moves[i]){
            case 'U' :
                u_num ++ ;
                break;
            case 'D' :
                d_num ++ ;
                break;
            case 'R' :
                r_num ++ ;
                break;
            case 'L' :
                l_num ++ ;
                break; 
        }            
    }
    if(u_num == d_num && r_num == l_num){
            return true;
    }
    else{
        return false;
    }
};
