console.log('tut14 dom');
//single element Selectore
let element = document.getElementById('try');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
// element.style.color='red';

// //to change inner html and text

// element.innerHTML= '<b>text has been changed on webpage';
// { element.innerText = `<b>we are    devloper`;}
// console.log(element.innerText);
// console.log(element);

let se1  = document.querySelector('#child');
// # for id and . for class
sel = document.querySelector('.child');
// // get the first name of class set
se1 = document.querySelector('div');
// se1.style.color = 'green';
// console.log(se1);

// //  // // single id fetch pratice

let elems3 = document.getElementById('tryoneidfetch');
// console.log(elems3);
elems3.style.color = '#f2626b';

// // need to serch when net  beacuse select 
// the element but can't give the border to all at one time.

let elems4 = document.getElementsByClassName('phototry');
for (let index = 0; index < elems4.length; index++) {
    const element = elems4[index];
    console.log(elems4);
    elems4.style.border = 'red';// not work this
    elems4.style.border = 'yellow';    
}
// ????????????