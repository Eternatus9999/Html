 window.alert('Hello');
 console.log("This a javascript");

const up = document.getElementById("right");
const down = document.getElementById("left");
const num = document.getElementById("num");
let x=0;
up.onclick = function(){
    x=Math.floor(Math.random() * (100-50) )+50;
    num.textContent = x;
}