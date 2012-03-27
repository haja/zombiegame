// Actor class
function Actor(x, y, size) {
	this.x = x;
	this.y = y;
	this.size = size;

	this.MOVE_BY = 2; // pixels we are moving in one step
}

Actor.prototype.update = function() {
	if(this.isMovingUp)
		this.moveUp(myGame.gamefield);
	if(this.isMovingDown)
		this.moveDown(myGame.gamefield);
	if(this.isMovingLeft)
		this.moveLeft(myGame.gamefield);
	if(this.isMovingRight)
		this.moveRight(myGame.gamefield);
}

Actor.prototype.moveTo = function(newX, newY, tile1, tile2) {
	if(tile1.walkable && tile2.walkable) {
		this.y = newY;
		this.x = newX;
		return true;
	}
	return false;
}

Actor.prototype.moveUp = function(gamefield) {
	var destinationY = this.y - this.MOVE_BY;
	var tile1 = gamefield.getTileAt(this.x, destinationY);
	var tile2 = gamefield.getTileAt(this.x + this.size, destinationY);
	return this.moveTo(this.x, destinationY, tile1, tile2);
}

Actor.prototype.moveDown = function(gamefield) {
	var destinationY = this.y + this.MOVE_BY;
	var collisionTestY = destinationY + this.size;
	var tile1 = gamefield.getTileAt(this.x, collisionTestY);
	var tile2 = gamefield.getTileAt(this.x + this.size, collisionTestY);
	return this.moveTo(this.x, destinationY, tile1, tile2);
}

Actor.prototype.moveLeft = function(gamefield) {
	var destinationX = this.x - this.MOVE_BY;
	var tile1 = gamefield.getTileAt(destinationX, this.y);
	var tile2 = gamefield.getTileAt(destinationX, this.y + this.size);
	return this.moveTo(destinationX, this.y, tile1, tile2);
}

Actor.prototype.moveRight = function(gamefield) {
	var destinationX = this.x + this.MOVE_BY;
	var collisionTestX = destinationX + this.size;
	var tile1 = gamefield.getTileAt(collisionTestX, this.y);
	var tile2 = gamefield.getTileAt(collisionTestX, this.y + this.size);
	return this.moveTo(destinationX, this.y, tile1, tile2);
}

Actor.prototype.draw = function(ctx, cam) {
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(this.x - cam.x, this.y - cam.y, this.size, this.size);
}
