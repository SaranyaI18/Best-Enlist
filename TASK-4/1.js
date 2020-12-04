function predict_sign(a, b, c){
	var num1 = a + b + c;
	var sp = num1.split('');
	var sorting = sp.sort('');

	var n = sorting.includes("+");
	var m = sorting.includes("-");

	if (m == true && n == false){
		console.log(alert('-'));
	}
	else if (m == false && n == true) {
        console.log(alert('+'));
    }
    else if (m == true && n == true) {
        console.log(alert('Both + and - included');
    }
    else{
    	console.log(alert('Welcome'))
    }



}