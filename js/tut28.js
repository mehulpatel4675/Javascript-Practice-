console.log('tut28 prototype function');
//object literal : object.prototype
let obj ={
	name:'me',
	address:'nvs',
	bike:'honda'
}
console.log(obj);
// make the consutctore than we make prototype 
function obj(givenName){
	//in above obj is inherite from line 02 obj declaration
	this.name = givenName;
	// in above givenName is constuctore
}

obj.prototype.getName = function(){
	return this.name;
}
// in below change that prototype which obj inherite 
obj.prototype.setName = function(newName){
	this.name = newName;
}
let obj2= new obj('mm');
console.log(obj2);

//  _prpto_  give the somany bydefult finction we can use easily