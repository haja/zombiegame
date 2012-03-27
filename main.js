var width = 800; // canvas width
var height = 450; // canvas height

var FIELDSIZE = 200;
var TILESIZE = 50;

var PLAYER_START_X = 100;
var PLAYER_START_Y = 100;
var PLAYER_SIZE = 50;


function Game() {
	this.fps = 48;
	this.startX = 20;
	this.startY = 20;
	this.tileSize = 50;
	this.ctx = document.getElementById("canvas").getContext("2d");

	this.player = new Player(PLAYER_START_X, PLAYER_START_Y, PLAYER_SIZE);

	this.gamefield = new Field(FIELDSIZE, TILESIZE);

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
	this.ctx.fillRect(0, 0, width, height);
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

Game.prototype.handleKeyDown = function(e) {
	if(e.keyCode == 87) {
		// w pressed
		this.player.moveUp(this.gamefield);
	}
};

var myGame = new Game();

// Start the game loop
myGame._intervalID = setInterval("myGame.run()", 1000 / myGame.fps);



// Player class
function Player(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;

	this.MOVE_BY = 2; // pixels we are moving in one step
}

Player.prototype.moveUp = function(gamefield) {
	var destinationY = this.y + this.MOVE_BY;
	var tile = gamefield.getTileAt(this.x, destinationY);

	if(tile.walkable) {
		this.y = destinationY;
		return true;
	}
	return false;
}


// register key handlers
document.body.onkeydown = myGame.handleKeyDown;
