var num1;
var num2;
var num3;
function rep(x){
num1 = x % 10;
num2 = x / 10;
num3 = num2 % 10;
if (num1 === num3){
    return true
}
else{
    return false
}
}