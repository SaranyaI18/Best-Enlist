var fin;
var s_lar;
function second_lar(){
    var arr = [8,39,18,3,45,183,211]
    fin = arr.sort(function(a,b){return b - a})
    s_lar = fin[1]
    return s_lar
}