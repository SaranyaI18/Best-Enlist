function vowels(str1){
    this.bevowel = function(){
        let m = str1.split("");
        var arr = ['a','e','i','o','u','A','E','I','O','U'];
        let sum = "";
        for(let i=0; i<m.length; i++){
            for(let j=0; j<arr.length; j++){
                if (m[i] === arr[j]){
                  sum = sum + m[i] 
                  return sum
                }
            }    
        }
    }
}

var details = new vowels("saran");

console.log(details.bevowel())