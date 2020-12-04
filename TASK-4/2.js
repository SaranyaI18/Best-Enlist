function print_num(x,y){
    for(var i=x;i<=y;i++){
        if (i % 3 === 0){
            console.log('bestenlist')
        }
        else if (i % 5 === 0){
            console.log('react')
        }
        else if (i % 3 === 0 && i % 5 === 0){
            console.log('bestenlistreact')
        }
        else{
            console.log(i)
        }
    }

}
