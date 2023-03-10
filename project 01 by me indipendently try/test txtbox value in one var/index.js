var message = document.getElementById('message'); 
 

var getval = document.getElementById("getval");
getval=addEventListener('click',func1);
function func1(){
    // console.log("func1 activate");
    printval.innerText = message.value;
    console.log(printval);
    
}