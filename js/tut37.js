console.log("tut 37   callBack function");
// callback function required beacusse js is run line by line  but sometime some function run after oneanother than callback use

// when we use it

const students = [
    {name: "mehul", subject:"javascript"},
    {name:"zaid", subject:"Angular"}
]

function enrollstudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("enrolled");
        callback();
    },1000);
}

function getStudent(){
    setTimeout(function(){
        let str = '';
        students.forEach(function(students){
            str += `<li> ${students.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
         console.log("fetched");
    },8000);
}
let newStudent = {name:"dhaval", subject:"Flatter"}
enrollstudent(newStudent,getStudent)