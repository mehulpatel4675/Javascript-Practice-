console.log('tut 27 object orintention');
// car running, car.increasespeed. car.anlayzer
//with templeate only make templeate onces then only declare the 100 car
// it's called constructore

// simple  object literal for creating object
let car ={
	name:"maruti wagnore",
	topspeed:80,
	run:function(){
		console.log('car is running')
	}
}
// new Date();

// consuctore:- create the object
function Generalcar(givenName,speed){
	this.name = givenName;
	this.topspeed = speed;
	this.run = function(){
		console.log(`${this.name} is running`);
	}
	this.analyzer = function(){
		console.log(`this car is slower by ${200-this.topspeed} kmph than mercideis`)
	}
}
// car will be 100 or more
car1 = new Generalcar('nissan',180);
car2 = new Generalcar('kia',120);
car3 = new Generalcar('alto',80);
console.log(car);
