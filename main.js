var width = 800; // canvas width
var height = 450; // canvas height

handleKeyDown = function(e) {
	if(e.keyCode == 87) {
		// w pressed
		myGame.player1.isMovingUp = true;
	} else if(e.keyCode == 83) {
		// s pressed
		myGame.player1.isMovingDown = true;
	} else if(e.keyCode == 65) {
		// w pressed
		myGame.player1.isMovingLeft = true;
	} else if(e.keyCode == 68) {
		// w pressed
		myGame.player1.isMovingRight = true;
	}
};

handleKeyUp = function(e) {
	if(e.keyCode == 87) {
		// w pressed
		myGame.player1.isMovingUp = false;
	} else if(e.keyCode == 83) {
		// s pressed
		myGame.player1.isMovingDown = false;
	} else if(e.keyCode == 65) {
		// w pressed
		myGame.player1.isMovingLeft = false;
	} else if(e.keyCode == 68) {
		// w pressed
		myGame.player1.isMovingRight = false;
	}
}

handleMouseDown = function(e) {
	myGame.shootAt(e.clientX - ourCanvas.offsetLeft, e.clientY - ourCanvas.offsetTop);
}

handleMouseMove = function(e) {
	textBox.innerHTML = "Mouse: x: " + (e.clientX - ourCanvas.offsetLeft) + " y: " + (e.clientY - ourCanvas.offsetTop);
	myGame.mousePos = {x : (e.clientX - ourCanvas.offsetLeft), y : (e.clientY - ourCanvas.offsetTop)};
}


var myGame = new Game();

// Start the game loop
myGame._intervalID = setInterval("myGame.run()", 1000 / myGame.fps);


// register key handlers
document.body.onkeydown = handleKeyDown;
document.body.onkeyup = handleKeyUp;

var ourCanvas = document.getElementById("canvas");
ourCanvas.onmousedown = handleMouseDown;

var textBox = document.getElementById("textBox");
ourCanvas.onmousemove = handleMouseMove;
