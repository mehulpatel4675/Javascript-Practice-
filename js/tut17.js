console.log('tut 17 event');
// webpage interaction = event
document.getElementById("heading").addEventListener('click',function(e){
    let var1, var2,var3,var4;
    console.log('you clicked the heading');
    console.log(e);
    var1 = e.target;
    var1 = e.target.className;
    var1 = Array.from(e.target.classList);
    var1 = e.target.id;
    var1 = e.offsetX;
    var2 = e.offsetY;
    var3 = e.clientX;
    var4 = e.clientY;
    console.log('offsetx:-'+ var1,'offsetY:-'+ var2,'clientX:-'+ var3,'clientY:-'+ var4);
});
document.getElementById('ful').addEventListener('mousemove',function(e2){
    console.log('Second Event start mouse move');
    let var1,var2;
    var1 = e2.target.className;    
    console.log(var1);
    // var2=location.reload();
    console.log(var2);

});
document.getElementById('myclass2').addEventListener('dblclick',function(e3){
        console.log('its double clixk event 3');
        var1 = e3.target.className;
        console.log(var1);
});