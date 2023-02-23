console.log('tut 21');
/*
you have to create div and inject it in to page it containt heading. 
whnever some on  click it convert in edited item.
 when user click away it's store in localstorage.

div
heading
eventlistner like click
convert in editable content
click away(blur)
*/
//my first id the id of div with the class child red

let a=document.getElementById('myfirst');
console.log(a);
console.log(a.innerText);
let b = document.getElementById('testme');
console.log(b);
// console.log(b.innerHTML);
e=document.getElementById('testme').addEventListener('click',function(e){
	console.log('click and fire event listner')
});
// console.log(e.child red);

document.getElementById('2').
addEventListener('click',function(e){
	console.log('fire with class name');
	edditid=document.getElementById('2');
	console.log(edditid.innerText);

});
document.getElementById('3').
addEventListener('click',function(e){
	console.log('fire with id 3');
	edditid=document.getElementById('3');
	console.log(edditid.innerText);
	let elem1 = document.getElementById('3')
	let elem2 = "testing replace";
	console.log(elem2);
	elem1.replaceWith(elem2);
	console.log(elem1);
	let value = localStorage.getItem('text');


});