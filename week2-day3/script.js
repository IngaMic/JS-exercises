var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");
//tell canvas to begin a path - tells canvas: start a line.
ctx.beginPath();
ctx.fillStyle = "turquoise";
ctx.fillRect(0, 0, canvas.width, canvas.height);
//head
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
//activating the map
ctx.stroke();
//body
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(300, 150);
ctx.lineTo(300, 300);
ctx.closePath();
ctx.stroke();
//leftHand
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(300, 180);
ctx.lineTo(250, 260);
ctx.closePath();
ctx.stroke();
//rightHand
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(300, 180);
ctx.lineTo(350, 260);
ctx.closePath();
ctx.stroke();
//leftLeg
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(300, 300);
ctx.lineTo(250, 380);
ctx.closePath();
ctx.stroke();
//rightLeg
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.lineTo(300, 300);
ctx.lineTo(350, 380);
ctx.closePath();
ctx.stroke();

