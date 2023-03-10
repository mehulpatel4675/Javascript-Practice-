console.log('tut16');
//Create
//how to make element
 let element = document.createElement('li');
//  console.log(element);
 let text = document.createTextNode('new text node to call directly');
 //2nd fetch
//  console.log(text);
 element.appendChild(text);// 2nd fetch

 // add the class name to the li element
 element.id = 'create-li';
 element.className = 'child-ul';
 element.setAttribute('title','mytitle')
 element.innerText = 'add the p';
//  console.log(element);
element.innerHTML = '<b> this is enter with inner HTML because of bold etc teg use'

 let ul = document.querySelector('ul.this');
 ul.appendChild(element);
//   console.log(element);
 // to use inner text or innerHTML we can separetlly...
//  ..create the textNode then simple call it:- fetch 2nd

// REpalce
 //how to replace element
 let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('this is created node for element');
elem2.appendChild(tnode); 
// console.log(elem2);
//replace
elem2.replaceWith(element);
// console.log(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('ful'));
myul.removeChild(document.getElementById('lul'));
// to get the id/class of element
// let pr = elem2.getAttribute('id');
// console.log(pr);
// let pr1 = elem2.getAttribute('class');
// console.log(pr1);
// let pr2 = elem2.hasAttribute('class');
// console.log(elem2,pr2);
// elem2.removeAttribute('id');
// console.log(elem2);
// elem2.id = 'elem2rewise';
// console.log(elem2);

// quiz
//create a heading with text as "gotocodewith harry" and
//  create an a tag outside href='"www.codewithharry.com"

let test1 = document.createElement('h3');
test1.innerText = "code with harry";
var test2 = document.createElement("h1");
test2.replaceWith(test1)
console.log(test2);
console.log(test1);
// console.log(test1.innerHTML);