console.log('tut6 properties Method Template literals');
const name23 = 'mehul';
const greeting = 'Good Morning..'
// console.log(greeting + name23);
//concat string function

let html;
html = "<h1> this is Heading</h1>" + "<p> this is para</p>";
html = html.concat('Addition add in html variable');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
//only return in capital in output but not change in orignal string

// console.log(html[5].toUpperCase());

// arrat start with 0
// console.log(html.indexOf('this'));
//give first "this" begining position
// console.log(html.lastIndexOf('this'));
// give last "this" position 
// console.log(html.endsWith(''));
// console.log(html.includes('is'));
// console.log(html.substring(6, 0));
// console.log(html.slice(0,6));
//last 4 char of string

// console.log(html.split('<'));
// crack the string with space (any element) and store in array 

// console.log(html.replace('this', 'it'));
//replace this keyword with it keyword

let name1 = 'rahul';
let fruits1 = 'orange';
let fruits2 = 'apple';
let myhtml2 = `hello ${name1}
                <h1>This is "my" heading</h1>
                <p> you like ${fruits1} and ${fruits2}`;

document.body.innerHTML = myhtml2;
// templeate liter to string generate html code
// also last line show the msg on web page not in console
  

let html12 = [1,2,3];
var html22 = [4,5,6];
html = html22.concat(html12);
// console.log(html);
