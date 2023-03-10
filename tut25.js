console.log('tut25 solution of 21 practice');
//make proper name of any var
// create element in div
let divElem = document.createElement('div');
//set attribute id name with elem
// add text to create that element
let val=localStorage.getItem('text');
let text;
if(val==null){
text=document.createTextNode('these is editeable fild');}
else{
	text=document.createTextNode(val);
}
divElem.appendChild(text);;
// Give Element id and class
divElem.setAttribute('class','elem');
divElem.setAttribute('id','elem');
divElem.setAttribute('style','border:2px solid black; width:154px; margin:30px;padding:30px');
//Grab The Main Container
let container = document.querySelector('.container');
let first = document.getElementById("myfirst");

//insert the elelment with id first
container.insertBefore(divElem,first);

console.log(divElem,container,first);

//add event listner
divElem.addEventListener('click',function(){
	let noTextAreas = document.getElementsByClassName('textarea').length;
	if(noTextAreas ==0){
		let html=elem.innerHTML;
		divElem.innerHTML = `<textarea class=" textarea form-control"  id="textarea"  row=3> ${html} </textarea>`;
	}
	//lisiten for the blour event in text area
	let textarea=document.getElementById('textarea');
	textarea,this.addEventListener('blur',function(){
		elem.innerHTML=textarea.value;
		localStorage.setItem('text',textarea.value)		
	})

});