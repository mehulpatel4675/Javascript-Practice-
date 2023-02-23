console.log('tut15');
// manipulate the website
// DOM traversing
let cont = document.querySelector('.no');
// with selectore selct element if many element there then first element select
cont = document.querySelector('.container');
let nodeName = cont.childNodes[0].nodeName;
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeName);
// console.log(nodeType);
// console.log(cont.childNodes);//space + comment
console.log(cont.children);//only element show

let container = document.querySelector('.container');
console.log(container.children[1].children[0].children); 
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.childElementCount);//gave child element child
console.log(container.firstElementChild);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
//all use to select element in dom



