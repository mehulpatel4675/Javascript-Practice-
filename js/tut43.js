console.log("Tut 13 Async_Await");
// async return a prmise

async function harry(){
    console.log("inside harry function");
    const response = await fetch('https://reqres.in/api/users?page=2');
    console.log('before response');
    const user = await response.json();
    console.log('user resolved');
    return user;
}
console.log("before calling harry");;
let a = harry();
console.log("after calling harry function by var a");;
console.log(a);
a.then(data => console.log(data))
console.log("last line of file");;