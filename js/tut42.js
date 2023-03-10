console.log("Fetch Api tut42");

function getData(){
    console.log("Started GetData");
    url= "https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data) => {
        console.log("inside second");
        console.log(data);
    })
}
// console.log("Before Running getDAta");
// getData();
// console.log("After Running getData");

// https://api.instantwebtools.net/v1/passenger
// https://reqres.in/api/users?page=2
function postData(){    
    url= "https://reqres.in/api/users?page=2";
    data = `"avatar":"shttps://reqres.in/img/faces/7-image.jpg"
    "email":"aasmichael.lawson@reqres.in"
    "first_name":"aaaaaaaaMichael"
    "id":170
    "last_name":"daaaaaLawson"`;

    params = {
        method:'post',
        headers:{
            'content-type':'application/json'
        },body:data
    }
    fetch(url).then(response=> response.json())
    .then(data => console.log(data));
    
}
postData();