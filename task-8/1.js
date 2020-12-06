var employee = [
	{name:'pragu', age:30, country:'india'}
	{name:'prabu', age:20, country:'india'}

]

employee.prototype.beremoveobject = function(){

	employee.map((i) => {

		delete i.country;
	})
	console.log(employee)
}

employee.remove()
