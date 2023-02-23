console.log('tut10 function scope');
// function is block of code. which use multiple time by just type the short code insted of too much code
let name = 'rahul';
let name1 = 'mehul';
// console.log(name1);
// console.log(`happy birthday ${name1} Thank you`);
function greet(name,thank='noo thanks '){
    let msg = `happy birthday ${name}.hahahahahsdfskdbfkjsbgskdgbsjkgbsjgdsdgbsdgbsdkjgbsfd Thank you ${thank}`;
    return msg;
}
let val = greet(name1,'added msg');
// console.log(val);
// same things we can write
const mygreet = function(name1){
    let msg2 = `wel come to programming world dear ${name1}`;
    return msg2;
}
let p=mygreet(name1);
// console.log(p);
// same work do in making object
const myobj = {
    name:'parthiv',
    game: function(){
        return"call of duty";
    }
}// now we need value of game then
// console.log(myobj.game());
// console.table(myobj);

arr = ['fruit','vegis','furniture'];
arr.forEach (function(element,index,array){
    console.log(element,array,index);
    console.log(element,index);

})


//scope
// let and const has block level scope
//var has Funvtion level scope.
let i = 234;
// console.log(i);
function ui(name){
    i = 9;
    // console.log(i);
    return `This is a ${name} ui`;
}
    // console.log(ui("mehul"),i);