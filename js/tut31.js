 console.log('tut31 es6 classes & Inheritance');
//calss:- blue print 
class Employee{
	constructor(givenName,givenExperiance,givenDivision){
	this.name = givenName;
	this.experiance = givenExperiance;
	this.division = givenDivision;
	// object = given... input walla
	}
	slogan(){//function
		return `i am ${this.name} and this is best company`
	}
	joiningYear(){
		return 2020 - this.experiance;
	}
	static add(a,b){
		return a+b;
	}
}
// harry = new Employee('msp',20,'vld')
// console.log(harry.joiningYear());

console.log(Employee.add(3,5));

// inhetance

class programmer extends Employee {
	constructor(givenName,givenExperiance,givenDivision,givenLanguage,github){
		super(givenName,givenExperiance,givenDivision);
		//super means last constructore value(last class constructore) 
		this.language = givenLanguage;
		this.github = github;
	}
	favoritLanguage(){
		if(this.language == 'python'){
			return 'python';
		}
		else{return'js';}
	}

	static multiply(a,b){return a*b;}

}
rudra = new programmer("rudra",3,"lays","python","rudra444") ;
console.log(rudra);
console.log(rudra.favoritLanguage());
console.log(programmer.multiply(5,15));