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
for(var i=1; i<=5; i++){

    for(var a=1; a<=5; a++){
        // document.write(i);
        document.write(a);
        
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