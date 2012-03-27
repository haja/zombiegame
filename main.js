var HORZ_SIZE = 800;
var VERT_SIZE = 450;
var TILE_SIZE = 50;



function Game() {
	this.fps = 48;
	this.startX = 20;
	this.startY = 20;
	this.tileSize = 50;
	this.ctx = document.getElementById("canvas").getContext("2d");

	this.looping = new Object();
	this.looping.skipTicks = 1000 / this.fps;
	this.looping.maxFrameSkip = 10;
	this.looping.nextGameTick = (new Date).getTime();
}

Game.prototype.update = function() {
	this.startX = this.startX + 1;
};

Game.prototype.draw = function() {
	this.ctx.fillStyle = "gray";
	this.ctx.fillRect(0, 0, 800, 450);
	this.ctx.fillStyle = "red";
	this.ctx.fillRect(this.startX, this.startY, this.tileSize, this.tileSize);
};

Game.prototype.run = function() {
		var loops = 0;

		while ((new Date).getTime() > this.looping.nextGameTick && loops < this.looping.maxFrameSkip) {
			this.update();
			this.looping.nextGameTick += this.looping.skipTicks;
			loops++;
		}

		this.draw();
};

var myGame = new Game();

// Start the game loop
myGame._intervalID = setInterval("myGame.run()", 1000 / myGame.fps);

