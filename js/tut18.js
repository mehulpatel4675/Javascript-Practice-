console.log('tut18 More About event');
// for (let i = 0; i < 5; i++) {
    
//     alert('ho')
// }
let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousemove',func3);

function func1(e){
    console.log("thanks",e);
    e.preventDefault();// bypass default behivior
}

function func2(e){
    console.log("thanks it's a dobel click",e);
    e.preventDefault();// bypass default behivior
}

function func3(e){
    console.log("mouse move in dom done",e);
    e.preventDefault();// bypass default behivior
}

let uleffect = document.getElementById('myul').addEventListener('mouseenter',function(){
        console.log("you enterd in ul");
        myul.style.color = 'red';
});
uleffect = document.getElementById('myul').addEventListener('mouseleave',function(){
        console.log('you exit from the ul');
        myul.style.color = 'green';
});

let myclass2 = document.getElementById('myclass2').addEventListener('mousedown',function(){
    console.log('you are  activat the mouse down event');
    // mouse down is simillar like mouse click 
});



let myclassedit = document.getElementById('myclass3').addEventListener('mousemove',function(e){
    console.log('event mouse up',e);
    // these activated when relase mouse click
    myclass3.innerHTML = "<b>Child 3</b>";
    myclass3.style.color = 'green';
    e.preventDefault();

});
document.querySelector('.dynamicbg').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},452)`;// work with 3 value like R  G  b yeee. 20 min to slove
    
});