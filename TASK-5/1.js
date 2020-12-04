function employee(str1){
    this.bespacify = function(){
        let i = str1.split("").join(' ');
        return i;
        }
}

var details = new employee("name")

console.log(details.bespacify());