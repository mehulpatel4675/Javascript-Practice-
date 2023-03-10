console.log("Magic Notes 1st project");
showNotes();// it's called first because if it's not declared then after refresh of browser the last saved list is no seen us. 

// if user add notes to the localstorege
let addbtn = document.getElementById('addbtn');//addbtn id declared at navbar html tag line 44 
addbtn.addEventListener('click', function (e) {//make a click eventListner
    console.log("i am adding a notes");
    let addTxt = document.getElementById('addTxt');//Attached text id with var aaddETxt 
    let notes = localStorage.getItem('notes');//get the data of text from localstorage and store in to var notes
    if (notes == null) {
        notesObj = [];// if no notes save there then it's make a one Array with name notesObj
    }
    else {
        notesObj = JSON.parse(notes);// if notes not null then take notes and convert into text format with JSON parse then javaScript object use in program
    }
    notesObj.push(addTxt.value);//After check notesObj null or not then push a new text in addTxt
    localStorage.setItem("notes", JSON.stringify(notesObj));//store new item in notes from noteObj  value with  conversion in string with JSON.stringify() function
    addTxt.value = "";// after add the Text TextBox must be empty so give addTxt(id of textbox) a null Array
    // console.log(notes);
    showNotes();// call these function because we need a live update in the notes
});

// show notes from the localstorage
function showNotes() {//we only define what we do after submit the text from textBox and empty the box but we also show the notes live so we make the new function for that
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];// to store in object so gave proper name notesObj
    }
    else {
        notesObj = JSON.parse(notes);
    }
    // same declaration of notes and if else use for check ethier localstorage is empty or not then convert the notes value in JSON.parse
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div id="notes" class="row container-fluid">
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">Notes:-${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
          </div>
         </div>     `; // why we do these(we put first in the html for proper editing and show the looks what we need as per our required then only cut paste from that p tag from class card) so 1:-we make the blank array with name html.. for every new note we need the new number of notes and same box every time 2:-notesObj gsve array with forEach with function ( with element and index) then 3:-add the all html div slot with html+=`` .. at thr Notes and element we add ${index +1}(new number for new notes) ans ${element}(store our new content from TextBOx or from id addTxt/#addTxt)

    });
    let notesElm = document.getElementById('notes');// no notes to display chech & display msg and note in both codition
    if (notesObj.length != 0){
            notesElm.innerHTML = html;// make note as a element so name noteElm
    }else{
        notesElm.innerHTML= `Nothing to show ! use add Notes Section`;
    }
}
// function to delet a notes
function deleteNote(index){
    console.log("i am deleting a notes");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
//right endside a serchbar in our page with the id searchTxt. we make the live serrch with just type a character by user(us).. 
let search = document.getElementById('searchTxt');//Make the Var name Search save the searchbox with id searchTxt
search.addEventListener("input",function(){//made the EventListner for var 'search'..input indicate which type of value we take, function is listner menas who analize the input(function is also name or  elemeant sometimes)
    let inputVal = search.value;// save the search value in var inputVal
    console.log("input event fired", inputVal);// only for check our event is fired or not
    let noteCards = document.getElementsByClassName('noteCard');// make var noteCards attached with same className which we define in html div notes and class name noteCard.. same class who make the new notes box when we click on ADD NOTE(in line 36).. not get in  index.html take 10 min to remind it haha..
    Array.from(noteCards).forEach(function(element ){//make the array to compare searchTxt and addTxt(in which input store every time)
            let cardTxt = element.getElementsByTagName("p")[0].innerText;//to above comparision possible take the text from id p which <p>(this place we cut paste our html content here{line 35:43}) tag haha..
            if(cardTxt.includes(inputVal)){//for compare between searchTxt&addTxt with if else
                element.style.display = "inline-block";
            }else{
                element.style.display = "none";
            }
            // console.log(cardTxt);

    })
});

/* further Features
1:-add title
2:-mark note as important
3:- seprate name by user
5:- sync and host from to a webserver
6:- Don't Store a null TextBox in list

*/