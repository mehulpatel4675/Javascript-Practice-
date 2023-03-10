console.log("tut 35 AJex");
//  FIRST BUTTON
let btn01 = document.getElementById("btn01").addEventListener("click", function btno1click(){
    console.log("btnp1 function run on btn-01 click");
    // her we use intialize xhtter.jason , onload , 
    let xhr = new XMLHttpRequest();
    // xhr.open('get', "https://dummyjson.com/products/1", true)
    xhr.open('post',"https://dummy.restapiexample.com/api/v1/create",true)
    xhr.getResponseHeader('content-type','application/json');//  content-type format ma  jason format ma data moklse
    // xhr.onprogress = function () { console.log("proccessing "); }
    xhr.onload = function ()
     {
        if (this.status == 200) {
            console.log(this.responseText);
        } else {console.log(" Error onloading");}
    }
        // last must send the request
        xhr.send();
})
// forSecond btn
let btn02 = document.getElementById('btn02');
btn02.addEventListener('click', secondbtnclick)

function secondbtnclick() {
    console.log("second btn click");
    //itialize
    const xhr = new XMLHttpRequest();
    xhr.open('get',"https://jsonplaceholder.typicode.com/posts",true);

    xhr.onprogress = function(){console.log("process chalu hai");}

    xhr.onload = function(){
        if(this.status == 200){            
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = ''
            for(key in obj){
                str += `<li> ${obj[key].title} </li>`
            }
            list.innerHTML = str ;
        }else{
            console.log("Error onload btn02");
        }
    }
    xhr.send();
}

