console.log('tut 5 change the type of variables');
let myvar;
myvar = 34;
// console.log(myvar);
// console.log(typeof myvar);
// change the value of myvar integer to string then

myvar2 =  String("34");
// console.log(myvar2);
// console.log(typeof myvar2);

//convert boolean var in to string
let bool1 = true;
// console.log(bool1);
// console.log(typeof bool1);

let bool2 = String(true);
// console.log(bool2);
// console.log(typeof bool2);

//      date into string
let date = new Date();
// console.log(date);
// console.log(typeof date);

let date1 = String(new Date());
// console.log(date1);
// console.log(typeof date1);

//array into string

arrstring = [1,23,34];
// console.log(arrstring,(typeof arrstring));

arrstring1 = String([1,23,34]);
// console.log(arrstring1,(typeof arrstring1));

// with to string convert 
let i = 8;
let r=i.toString();
// console.log(i.toString());
// console.log(typeof(r));

let stri = '343434';
// console.log(stri, typeof(stri));

//convert into number
let trynum = 34 ;
// console.log(trynum, typeof(trynum));

let trynum2 = Number("34");
// console.log(trynum2, typeof(trynum2));
//nan means NOT AN NUMBER ERROR

let num1 = '34';
let num2 = Number('35');
let num3 = parseInt('36');
let num4 = parseFloat(37);
//parse connvert the value in specifik format
// console.log(num1, typeof(num1));

// console.log(num2, typeof(num2));
// console.log(num3, typeof(num3));
// console.log(num3.toFixed(8));
// . pachi ketlla digit joye che ee fixed karse

//type coercion
let mystr = '698';
let mynum = 34;
// console.log(mystr + mynum);
//number convert in string and concanite with string
let mystr1 = Number('698');
let mynum1 = 34;
console.log(mystr1 + mynum1);
// do plus in this
