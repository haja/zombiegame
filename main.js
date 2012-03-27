init();

var width = 800; // canvas width
var height = 450; // canvas height
var frameTime = 1000 / 60; // 60 fps
var tilesize = 50;	// size of a tile in pixels
var field = new Field(200, 50); // the playing field

// Game Loop draw and update ----------------------------------
function draw() {
	var canvas = document.getElementById("canvas");  	
	var ctx = canvas.getContext("2d");
	field.draw(ctx);
	ctx.fillStyle = "red";
	ctx.fillRect(50, 50, 50, 50);
}

function update() {
}

function run() {
	update();
	draw();
}

function init() {
	LoadResources();
	setInterval("run();", frameTime);
}

