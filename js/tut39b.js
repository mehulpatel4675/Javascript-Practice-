console.log("tut 37   callBack function");
// callback function required beacusse js is run line by line  but sometime some function run after oneanother than callback use

// when we use it

const students = [
    {name: "mehul", subject:"javascript"},
    {name:"zaid", subject:"Angular"}
]

function enrollstudent(student,callback){
    return new Promise(function(resolve,reject)
    {
        setTimeout(function()
        {
        students.push(student);
        console.log("enrolled");
        const error = false;
        if(!error){
            resolve();

        }else{
            reject();
        }
        },5000);
    })
}

function getStudent(){
    setTimeout(function(){
        let str = '';
        students.forEach(function(students){
            str += `<li> ${students.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
         console.log("fetched");
    },1000);
}
let newStudent = {name:"dhaval", subject:"Fltter"}

enrollstudent(newStudent).then(function(){
    getStudent();
}).catch(function(){
    console.log("error ocur");
})