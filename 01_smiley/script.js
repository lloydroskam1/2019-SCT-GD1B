console.log('hallo wereld')

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.beginPath();
context.strokeStyle = "rgba(100,100,255,0.5)";
context.fillStyle = "rgba(255,0,0,0.2)";
context.lineWidth = "20";
context.moveTo(100,100);
context.lineTo(400,400);
context.lineTo(800,200);
context.closePath();
context.fill();
context.stroke();


context.beginPath();
context.fillStyle = "rgba(255,255,0,0.2)";
context.moveTo(1200,200);
context.lineTo(900,300);
context.lineTo(600,100);
context.closePath();
context.fill();
context.stroke();


context.beginPath();
context.fillStyle = "yellow";
context.lineWidth = "2";
context.arc(400,400,150,0,2*Math.PI);
context.closePath();
context.fill();
context.stroke();
