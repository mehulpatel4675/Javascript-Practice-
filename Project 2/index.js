// console.log("project 02 index.js");
// //constructer
// function Book(name, auther, type) {
// 	this.name = name;
// 	this.auther = auther;
// 	this.type = type;
// }
// //display constructore
// function Display() {

// }

// //add method to display prototype
// Display.prototype.add = function (book) {
// 	console.log('adding to UI');
// 	tableBody = document.getElementById('tableBody');
// 	let uistring = `
// 					<tr>
// 					<td>${book.name}</td>
// 					<td>${book.auther}</td>
// 					<td>${book.type}</td>
// 					</tr>`;
// 	console.log(uistring);
// 	tableBody.innerHTMl += uistring;
// 	console.log(tableBody.innerHTMl);
// }
// // clear
// Display.prototype.clear = function () {
// 	let libraryform = document.getElementById('libraryform');
// 	// libraryform.reset();	
// }
// //validat
// Display.prototype.validate = function () {
// 	if (Book.name.length < 2 || Book.name.length < 2) {
// 		return false
// 	} else {
// 		return true
// 	}
// }
// Display.prototype.show = function (type,displaymessage) {
// 	let message = document.getElementById('message');
// 	message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
// 	<strong>Message</strong>${displaymessage} You should check in on some of those fields below.
// 	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//   </div>`
// }


// //add submit event Listener
// // libraryform id of form
// let libraryform = document.getElementById('libraryform');
// libraryform.addEventListener('submit', libraryformsubmit)

// function libraryformsubmit(e) {
// 	e.preventDefult();
// 	console.log("libraryformsubmit fired");

// 	let name = document.getElementById('BookName').value;
// 	let AuthorName = document.getElementById('AuthorName').value;
// 	let type;

// 	let fiction = document.getElementById('fiction');
// 	let computer = document.getElementById('computer');
// 	let cooking = document.getElementById('cooking');

// 	if (fiction.checked) { type = fiction.value }
// 	else if (computer.checked) { type = computer.value }
// 	else if (cooking.checked) { type = cooking.value }

// 	let book = new Book(name, AuthorName, type)
// 	console.log(book);

// 	//display object to display book list
// 	let display = new Display();
// 	if (display.validate(book)) {

// 		display.add(book);//declare in line 14
// 		display.clear();
// 		display.show('success','book sccessfully added');
// 	} else {
// 		display.show('fail');
// 		display.show('danger','sorry you cannot add')
// 	}
// }
// //


// BookName
//AuthorName
//


console.log('This is ES6 version of Project 2');
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    
    }
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('YOu have submitted library form');
    let name = document.getElementById('BookName').value;
    console.log(name);
    let author = document.getElementById('AuthorName').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {type = fiction.value;}
    else if (programming.checked) {type = programming.value;}
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        // Show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}
