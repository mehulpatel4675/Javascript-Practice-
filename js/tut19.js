console.log('tut 19 solution os tut13');
let str = "php";
let links = document.links;
console.log(links);
// //Get All The Links on consol
console.log("we find the link from search word:-"+str);
let href;
Array.from(links).forEach(function (element) {
    href = element.href;
    // console.log(href);//my error 
    if (href.includes(str)) {
        console.log(href);
    }
});

// we got the link containt php