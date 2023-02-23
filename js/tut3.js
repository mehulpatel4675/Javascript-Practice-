console.log('tut 3 and varibales in JS');
// var , let , const
var name = "mehul patel";
var chennel;
chennel = 'code with mehul';
var marks = 34;
// console.log(name, chennel,marks);
var city = 'navsari';
// console.log(city);

const ownerName = 'om';
// ownerName = "mehul";
// const variable can't change the value in all program/script
// console.log(ownerName);

//let is not gobal declaration it's block level declaration
{
let city = 'nathie';
city="khergam";
// console.log(city);
}
// out side block ma let walla variable ni value/declaration j lese
// console.log(city);

const arr1 = [12,23,34,56];
console.log(arr1);
arr1.push("888");
console.log(arr1);
var temp=Number(arr1[4]);
console.log(temp);
console.log(typeof(arr1[4]));
arr1.pop();
console.log(arr1);
arr1.push(789789);
console.log(arr1);
// with const wee can not declar next time but we can add in the(push) cost same as object in the that oarticular array

