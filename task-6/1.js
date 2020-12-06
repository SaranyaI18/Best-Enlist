function World() {}

World.prototype.befindobject = function () {

	let obj =[

		{name: "shitu", age: 12, place: 'dubai'},
		{name: "foxy", age: 29, place: 'america'}


	]

	let array = [];

	for(let i=0; i<obj.length; i++){
		array.push(obj[i].name);
	}
	return array;

}

var place = new World();

console.log(place.befindobject())