let chars = ['A', 'B', 'A', 'C', 'B'];

Array.prototype.begetduplicate = function() {
    let one1 = chars.filter((c, index) => {
    return chars.indexOf(c) === index;

});

console.log(one1);

}

chars.begetduplicate();