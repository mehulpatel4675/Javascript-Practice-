console.log('tut30 prototype and inhiretance');
// prototype not used but es6 classes is more use than that
const proto = {

	slogan:function(){
		return "this is best company";
	},
	changeName: function(newName){
		this.name = newName
	}
}
//make ptototype
//This Create the hary object
const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "programmer"; 
//This also Create the hary object same work in another syntex
/*const harry = Object.create(proto,{
	name:{value:'harry',writable:true},
	role:{value:'programmer'},
})*/
harry.changeName('harry 2')
console.log(harry);

//emplyee constructore
function Employee(name,salary,experiance){
	this.name = name;
	this.salary = salary;
	this.experiance = experiance;
}
//slogan (we want to add the slogan function in it)
Employee.prototype.slogan = function(){
	return `this is a slogan from employee constructore regards:- ${this.name}`;
}

//object  (create)
let harryobj = new Employee("harry",345555,18);
console.log(harryobj.slogan());


//programmer
function programmer(name,salary,experiance,language){
	Employee.call(this,name,salary,experiance);
	this.language = language;
}
console.log(programmer);

//inheritance (for Employee slogan also work in Programmer)
programmer.prototype = Object.create(Employee.prototype);
//Manualy set the constuctore
programmer.prototype.constructor = programmer;

let Mehul = new programmer("Zabkil",270000000,1,"full Stack Devloper");
// console.log(Mehul);


// make  a food  object
// food inhertiated in cake

const food  = {

	type:function(){
		return `This is a return from type function`;
	},
	use:function(){
		return `it's useful in make a cake`;
	}
}
// console.log(food)
// above declared only

//Make a object
const vegfood = Object.create(food)
	// cake.name = name; mistake 
	// we declare here like
	vegfood.name = 'choco cake'
	vegfood.make = 'pure veg'
	console.log(vegfood);

// cakeconstuct
function cake(type,size){
	cake.type=type;
	cake.size=size;
}
//add type in food 
// cake.prototype.type = function(){
// 	return `we keep the nonVeg cake also ${cake.type}`
// }
// console.log(cake);

let chochip = new cake('nonveg','1');
console.log(chochip)
