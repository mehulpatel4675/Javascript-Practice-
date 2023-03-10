console.log("tut 44 Error handling");

let a = "name address";
a = undefined;

if(a != undefined){
    throw Error("thus is not undefined");
    
}
else{
    console.log("this is defined");
}

// try{
//     console.log("inside try block");
//     functionHarry();
// }catch(error){
//     console.log(error);
//     console.log("ok???");
//     console.log(error.message);
// }
// finally{ 
//     console.log("finally run this");
// }