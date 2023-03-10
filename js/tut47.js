console.log("tut 47 regular expression -2   metacharacter");

let regex = /test/ //  it means expression will match if string starat with that string
regex = /test$/  // $ means a string end with that (test) string.
regex = /t.st/  // . matches any one character
regex = /t*st/  // . matches any 0 or more  character
regex = /ta?sti?/  // . matches  opetional(if available or not)  character(before ?)
regex = /te\*st/  // compare * with string 
const str = "these is string for comparision and test   we repeat test for test ";
let result = regex.exec(str)
console.log(result);

if(regex.test(str)){
    console.log(`${str} string match the expression ${regex.source}`);
}else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}