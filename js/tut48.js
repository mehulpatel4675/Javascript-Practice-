console.log("tut 48 :-- regular expression -3  Character Set");

// const  regex = /^h /i;
//character Sets
let regex = /h[a-z]rry/  // can be a to z
 regex = /h[aty]rry/  // can be a t  or y
 regex = /h[^aty]rry/  // can be any character except(means notaty) a t  or y
 regex = /h[^aty]rr[yu]/  // (means notaty) yu  multiple expression 
const str = "harry bhai"

if(regex.test(str)){
    console.log(`${str} string match the expression ${regex.source}`);
}else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}