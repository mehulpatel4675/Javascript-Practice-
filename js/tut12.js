console.log('tut 12 DOM');
// let a =document;
//doc elelment of webpage and there address
// a = document.all;
//show all elemnt of webpage
// a = document.body;
//show body content of webpage
// a = document.forms;
// show how many formd in webpage
// a = document.links;
// show hpw many links on webpage
// a = document.images;
//show image of web page
a = document.scripts;
// show the script of web page
// console.log(a);

// and the print the list of images and script on HTML page
console.log('Fetch these in html page');
converted = JSON.stringify(a);
console.table(a);
// document.getElementById("try").innerHTML = converted ;
b = document.images;
console.log(b);
console.log(converted);