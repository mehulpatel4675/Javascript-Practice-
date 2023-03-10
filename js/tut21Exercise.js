console.log('tut 21');
// /*
// you have to create div and inject it in to page it containt heading. 
// whnever some on  click it convert in edited item.
//  when user click away it's store in localstorage.
// div
// heading
// eventlistner like click
// convert in editable content
// click away(blur)
// */
// //my first id the id of div with the class child red

// let a=document.getElementById('myfirst');
// // console.log(a);
// // console.log(a.innerText);
// let b = document.getElementById('testme');
// console.log(b);
// // console.log(b.innerHTML);
// e=document.getElementById('testme').addEventListener('click',function(e){
// 	console.log('click and fire event listner')
// });
// // console.log(e.child red);

// document.getElementById('2').
// addEventListener('click',function(e){
// 	console.log('fire with class name');
// 	edditid=document.getElementById('2');
// 	console.log(edditid.innerText);

// });
// document.getElementById('3').
// addEventListener('click',function(e){
// 	console.log('fire with id 3');
// 	edditid=document.getElementById('3');
// 	console.log(edditid.innerText);
// 	let elem1 = document.getElementById('3')
// 	let elem2 = "testing replace";
// 	console.log(elem2);
// 	elem1.replaceWith(elem2);
// 	console.log(elem1);
// 	let value = localStorage.getItem('text');


// });

//  try 01

let divElem = document.createElement('div');

divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;')

let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);


container.insertBefore(divElem,first);
console.log(divElem,container,first);

divElem.addEventListener('click', function(){
	let noTextAreas = document.getElementsByClassName('textarea').length;
	if(noTextAreas == 0){
		let html =elem.innerHTML;
		divElem.innerHTML = `<textarea class = "textarea form-contro" id="textarea" row="3'> ${html} </textarea>`
	}
	//
	// let textarea = document.getElementById('textarea');
	// textarea.addEventListener('blur',function(){
	// 	elem.innerHTML = textarea.value;
	// 	localStorage.setItem('text',textarea.value)
	// })

let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })

})
/// harry code

// console.log('This is tutorial 25')
// /*
// You have to create a div and inject it into the page which contains a heading.
// whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

// */

// // Create a new element
// let divElem = document.createElement('div');

// // Add text to that created element
// // let val = localStorage.getItem('text');
// // let text;
// // if (val==null){
// //  text = document.createTextNode('This is my element. click to edit it');
// // }
// // else{
// //     text = document.createTextNode(val);
// // }
// // divElem.appendChild(text);

// // Give element id, style and class
// divElem.setAttribute('id', 'elem');
// divElem.setAttribute('class', 'elem');
// divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// // Grab the main container
// let container = document.querySelector('.container');
// let first = document.getElementById('myfirst');


// // Insert the element before element with id first
// container.insertBefore(divElem, first);

// console.log(divElem, container, first)

// // add event listener to the divElem
// divElem.addEventListener('click', function () {
//     let noTextAreas = document.getElementsByClassName('textarea').length;
//     if(noTextAreas ==0){
//     let html = elem.innerHTML;
//     divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
//     }
//     //listen for the blur event on textarea
//     let textarea = document.getElementById('textarea');
//     textarea.addEventListener('blur', function() {
//         elem.innerHTML = textarea.value;
//         localStorage.setItem('text', textarea.value);
//     })
// });

 