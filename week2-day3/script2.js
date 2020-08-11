//bonus
// tried another way but left and up are not fixed yet.

var big = document.getElementById("big");
var b = big.getContext("2d");

var small = document.getElementById("small");
var ctx = small.getContext("2d");
b.beginPath();
b.fillStyle = "turquoise";
b.fillRect(0, 0, big.width, big.height);
// ctx.beginPath();
// ctx.fillStyle = "yellow";
// ctx.fillRect(0, 0, small.width, small.height);
//head
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
//activating the map
ctx.stroke();
//body
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 100);
ctx.lineTo(50, 220);
ctx.closePath();
ctx.stroke();
//leftHand
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 120);
ctx.lineTo(0, 220);
ctx.closePath();
ctx.stroke();
//rightHand
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 120);
ctx.lineTo(100, 220);
ctx.closePath();
ctx.stroke();
//leftLeg
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 220);
ctx.lineTo(0, 330);
ctx.closePath();
ctx.stroke();
//rightLeg
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(50, 220);
ctx.lineTo(100, 330);
ctx.closePath();
ctx.stroke();

var x = 0;
var y = 0;
function move(event) {
    if (event.keyCode === 37) {
        x += 5;
        small.style.left = -x + "px";
    } else if (event.keyCode === 38) {
        y += 5;
        small.style.top = -y + "px";
    } else if (event.keyCode === 39) {
        x += 5;
        small.style.left = x + "px";
    } else if (event.keyCode === 40) {
        y += 5;
        small.style.top = y + "px";
    }
}
document.addEventListener("keydown", move);
