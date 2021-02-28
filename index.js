let cnv = document.querySelector(".board");


let cnVs = cnv.getContext("2d");

let drawing = false;

let oldX = 0;
let oldY = 0;
cnVs.strokeStyle = "#f00";


cnv.addEventListener('mousedown' , e =>{
    drawing = true;
    oldX = e.offsetX;
    oldY = e.offsetY;

})

cnv.addEventListener('mouseup', e => {
    drawing= false;
})

cnv.addEventListener('mousemove',e => {
    if(!drawing) return 0;
    cnVs.beginPath();
    cnVs.moveTo(oldX,oldY);
    cnVs.lineTo(e.offsetX, e.offsetY);
    cnVs.stroke();
    oldX = e.offsetX;
    oldY = e.offsetY;

})


