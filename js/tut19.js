console.log('tut 19 solution os tut13');
let str = "googlee";
let links = document.links;
// console.log(links);
// //Get All The Links on consol

let href;
Array.from(links).forEach(function (element) {
    href = element.href;
    if (href.includes(str)) {
        console.log("we find the link from search word:-"+str);
        console.log(href);
    }else{console.log("link not find");}
});

// we got the link containt php