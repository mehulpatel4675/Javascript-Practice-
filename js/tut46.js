console.log("tut46 Regular Expression -1");
// let reg = /Mehul/; // g means global
// let reg = /Mehul/i; // i means insensitive
let reg = /Mehul/g // g means global
// console.log(reg);
// console.log(reg.source);

let s = "This is a text of string to find from init Mehul and second text mehul"

// 1.exec()- this function will return an array for match or null for no match 
let result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
if(result){
// console.log(result);
// console.log(result.input);
// console.log(result.index);
}
// 2. test()= Return True or false
// console.log();
let result2 = reg.test(s);
// console.log(result2);
// this will only print true if the "reg" is there in the string "a"

// 3. match() - return array of result or null
let result3 = s.match(reg);
// console.log(result3);


// 4. search() :- if match found then gave array else -1(no match found)
let result4 = s.search(reg)
console.log(result4);

//5 replace() - return new replaced string with all the replacement

let result5 = s.replace(reg, 'this');
console.log(result5);