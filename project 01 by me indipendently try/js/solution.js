console.log("solution on the way");
//textarea id =gettxt
//button id and onclick =  addbtn
var gettxt = document.getElementById('gettxt');
getbtn = addEventListener('click',fetchtxt);
function fetchtxt(){
    console.log("we enterd in fetchtxt function");
    text = gettxt.value;
    console.log(text);
}
// second problem Solution
var titles = [];
var names = [];
var titleInput = document.getElementById("title");
var nameInput = document.getElementById("name");
var messageBox = document.getElementById("display");

function insert(){
    titles.push(titleInput.value);
    names.push(nameInput.value);
    clearAndShow();
}
function clearAndShow(){
titleInput.value = "";
nameInput.value = "";

    //ahow our output
    messageBox.innerHTML = "";

    messageBox.innerHTML += "Titles:" + titles.join(",") + "<br>";
    messageBox.innerHTML +="Names:" + names.join(",") + "<br>";
}
    