var numJewelsInStones = function(J, S) {
    var count = 0;
    for(var i = 0; i < S.length; i ++){
        if(J.indexOf(S[i]) != -1){
            count ++;
        }
    }
    return count;
};
