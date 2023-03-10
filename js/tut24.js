console.log('tut 24 Date& Time in js');
let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('june 13 1989');
otherDate = new Date('12/09/1989');
console.log(otherDate);
let a;
// a = otherDate.getDay();
a = otherDate.getDate();
// a = otherDate.getMinutes();
// a = otherDate.getTime();// miniute from 01 jan to till date
// a = otherDate.getMonth();// 0 to your month
console.log(a);
otherDate.setDate(28);
otherDate.setMonth(1);
otherDate.setFullYear(1989);
otherDate.setMinutes(02);
otherDate.setSeconds(01);
otherDate.setHours(03);
console.log(otherDate);