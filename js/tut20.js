console.log('tut20 LocalStoreage');
// Add the key value in localstoreage
// localStorage.setItem('name','mehul');
localStorage.setItem('name2','Rahul');

//retrive the item from localstorage
let name1 = localStorage.getItem('name');
console.log(name1);
// empty local storeage
// localStorage.clear();
// localStorage.removeItem('name2');

//we can't store array directly in localstorege
localStorage.setItem('sabzi','tometo');//not like this
// insted of
let impArray = ['adrak','potetos','kepcikum','onion'];
localStorage.setItem('sabzi 2',JSON.stringify(impArray));

// localstorage save data from long time
//sessionstorage save data for one session after restart browser all memory wipeout
sessionStorage.setItem('Name','rahul');
console.log('Name');
sessionStorage.getItem('Name');