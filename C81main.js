canvas=document.getElementById("drawcanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=6;
ctx.arc(400,400,10,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",drawcircle);
function drawcircle(e){
    mouse_x = e.clientX - canvas.offsetLeft; 
    mouse_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=6;
    ctx.arc(mouse_x,mouse_y,10,0,2*Math.PI);
    ctx.stroke();
}
function check(){
    var fname="Ranveer";
    var sname="Rajani";
    console.log(fname.concat(sname));
    var n1=6;
    var n2=4;
    var ans=n1+n2;
    document.getElementById.
}