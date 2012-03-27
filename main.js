var width = 800; // canvas width
var height = 450; // canvas height

var FIELDSIZE = 200;
var TILESIZE = 50;

var PLAYER_START_X = 100;
var PLAYER_START_Y = 100;
var PLAYER_SIZE = 50;


function Game() {
	this.fps = 48;
	this.ctx = document.getElementById("canvas").getContext("2d");

	this.player1 = new Player(PLAYER_START_X, PLAYER_START_Y, PLAYER_SIZE);

	// field init
	LoadResources();
	this.gamefield = new Field(FIELDSIZE, TILESIZE);

	this.looping = new Object();
	this.looping.skipTicks = 1000 / this.fps;
	this.looping.maxFrameSkip = 10;
	this.looping.nextGameTick = (new Date).getTime();
}

Game.prototype.update = function() {
};

Game.prototype.draw = function() {
	this.gamefield.draw(this.ctx);
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

handleKeyDown = function(e) {
	if(e.keyCode == 87) {
		// w pressed
		myGame.player1.moveUp(myGame.gamefield);
	}
};

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


var myGame = new Game();

// Start the game loop
myGame._intervalID = setInterval("myGame.run()", 1000 / myGame.fps);


// register key handlers
document.body.onkeydown = handleKeyDown;
