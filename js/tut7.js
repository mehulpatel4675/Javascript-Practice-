console.log("tut07 array second part ");

const marks = [49,77,89,45,55];
const fruits = ['mango','apple','banana','pinepael'];
const mixed = [77,66,33,22,'pie','strings'];

const arr = new Array(23,123,345,'keri');
// console.log(arr);
// console.log(marks);
// console.log(fruits);
// console.table(mixed);
// console.log(arr.length);
arr[1] = 'mehul';// edited first element 23 with mehul as a string
// console.log(arr);

let value = marks.indexOf(45);//find the value or string in the array.
// console.log(value);
marks.push('edited value');
// console.log(marks);
marks.unshift('11111');//add value at satrting of araray
// marks.pop();// last value elemented
// console.log(marks);
marks.shift();//elemented the first value from array
// console.log(marks);
marks.splice(1,3);
// element position from 1 to 3 
// console.log(marks);
marks.reverse();
// console.log(marks);
// these method change original array 
let total;
let marks3 = [98.95,67,88];
let marks2 = ['me','as','a','devloper'];
// marks3 = marks3.concat(marks2);
// console.log(marks3);
total = marks2.concat(marks3);
// console.log(total);
//clear this 

let myobj = {
    name:'mehul',
    pass:true,
    marks5: [69.45]
}
// console.table(myobj);
console.table(myobj.name);



