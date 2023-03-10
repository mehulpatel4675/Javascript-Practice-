console.log("arrow function tut 41");
// creating a regular function
function mehul(){
    console.log("Keep Moving Forward");
}
mehul();

// function with return
function rahul(){
    return console.log("return something");
}
rahul();

// with arrow 
const megh=()=>"return good morning";
console.log(megh());

// const greet = () =>({name:"Mehul"});

// if multipale parameter  pranthisis required
const greet = (name,ending) => "Good Morning " + name + ending;
console.log(greet('Mehull', ' bye..'));
