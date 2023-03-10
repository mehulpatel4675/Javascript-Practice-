console.log("tut 39 promise()");
// resolve
// reject 
// pending


function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if(error){
                console.log('resolved......');
                resolve();
            }
            else{
                console.log("not  Resolved");
                reject("not Fulfilled");
            }
        },2000)
    })
}
func1().then(function(){
    console.log("Thanks");
}).catch(function(){
    console.log("very bad bro..." );
})