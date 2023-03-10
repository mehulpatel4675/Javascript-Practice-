console.log('tut 9 loops');
//Loops:- run till condition not wrong
// for
// while
// do while

// let a=34;
// a +=1;//35
// a++;//36
// // console.log(a);
var c = ' '
var n = 3
for(var row=0; row<=n; row++){//this loop for row
    
    var totalcolsinrow = row > n? n - row:row;
    // console.log(totalcolsinrow);
    var noofspace = n - totalcolsinrow;
    console.log(noofspace);
    for(var s=0; s<noofspace; s++){// this loop for space
        document.write("&nbsp");
    }
    for(var col=0; col<=totalcolsinrow; col++){ // this loop for col
        // document.write(c);
        document.write("*"); 
       
        
    }document.write("<br />") 
    
}
// i think we need arrray

// let j=0;
// while(j<05){ 
//     console.log(j+1);
//     j++;
// }

k = 0;
do{
    if(k===4){
        k++;
        continue;
    }
    // console.log(k+1);
    k+=1;
}while(k<06);
// console.log('done');

let arr = [12,23,34,44,55,67];
arr.forEach(function(element){
    // console.log(element);
});
// we can do same work from below code

for(let i=0;i<arr.length;i++){
    const element = arr[i];
    // console.log(element);
}
// make the object and use as per requiredment
let obj ={
    name:'zalla',
    age:27,
    os:'windows',
    type:'wordpress'
}
for(let key in obj){
    // console.log(`The ${key} of Object is ${obj[key]}`)
}


// for(i=1 ; i<=5; i++){
//     document.write(i);
// }
// var inputValue=5;
// for(var i=1 ; i<=inputValue; i++){// loop fro row

  
//     for(var space=0; space < inputValue-1; space++){
//         document.write("&nbsp");
//     }

//     for (var row = 0; row < i; row++) { // loop for col

//         document.write("*");        
//     }
//     document.write("<br>")
// }

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";   
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);