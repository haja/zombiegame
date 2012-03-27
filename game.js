var FIELDSIZE = 200;
var TILESIZE = 50;

var PLAYER_START_X = 120;
var PLAYER_START_Y = 200;
var PLAYER_SIZE = 50;


function Game() {
	this.fps = 48;
	this.ctx = document.getElementById("canvas").getContext("2d");
	this.ctx.drawImageRotated = function(image, x, y, rotation) {
		this.save();
		this.translate(x, y);
		this.rotate(rotation);
		var xpos = -image.width / 2;
		var ypos = -image.height / 2;
		this.drawImage(image, xpos, ypos);
		this.restore();
	}
	this.player1 = new Actor(PLAYER_START_X, PLAYER_START_Y, PLAYER_SIZE);
	this.camera = { x : 0, y : 0 };

	// field init
	LoadResources();
	this.gamefield = new Field(FIELDSIZE, TILESIZE);

	this.looping = new Object();
	this.looping.skipTicks = 1000 / this.fps;
	this.looping.maxFrameSkip = 10;
	this.looping.nextGameTick = (new Date).getTime();
}

Game.prototype.update = function() {
	this.player1.update();
	this.camera.x = this.player1.x - width / 2;
	this.camera.y = this.player1.y - height / 2;
};

Game.prototype.draw = function() {
	this.gamefield.draw(this.ctx, this.camera);
	this.player1.draw(this.ctx, this.camera);
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

Game.prototype.shootAt = function(x, y) {
	alert("x: " + x.toString() + " y: " + y.toString());
}
