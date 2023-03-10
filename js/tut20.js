console.log('tut20 LocalStoreage');
// Add the key value in localstoreage
localStorage.setItem('name','mehul');
localStorage.setItem('name2','Rahul');

//retrive the item from localstorage
let name1 = localStorage.getItem('name');
let name2 = localStorage.getItem('name2');
// console.log(name1);
// console.log(name2);
// empty local storeage
localStorage.clear();
// localStorage.removeItem('name2');

//we can't store array directly in localstorege
localStorage.setItem('sabzi','tometo');//not like this
// insted of
let impArray = ['adrak','potetos','kepcikum','onion'];
localStorage.setItem('sabzi 2',JSON.stringify(impArray));
console.log(impArray);
// localstorage save data from long time
//sessionstorage save data for one session after restart browser all memory wipeout
sessionStorage.setItem('Name','rahul');
sessionStorage.getItem('Name');
console.log('Name');