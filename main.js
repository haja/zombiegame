init();
var ctx;

var HORZ_SIZE = 800;
var VERT_SIZE = 450;
var TILE_SIZE = 50;

function init() {
	var canvas = document.getElementById("canvas");  
	ctx = canvas.getContext("2d");  
	draw();
}


function draw() {
	ctx.fillStyle = "gray";  
	ctx.fillRect(0, 0, 800, 450);  
	ctx.fillStyle = "red";  
	ctx.fillRect(50, 50, 50, 50);  
}  

