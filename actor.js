// Actor class
function Actor(x, y, size, moveBy) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.rotation = 0;

	this.moveBy = moveBy; // pixels we are moving in one step
}

Actor.prototype.turnToPos = function(pos) {
	this.rotation = Math.atan2(pos.y - (this.y + this.size / 2), pos.x - (this.x + this.size / 2));
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
	var destinationY = this.y - this.moveBy;
	var tile1 = gamefield.getTileAt(this.x, destinationY);
	var tile2 = gamefield.getTileAt(this.x + this.size, destinationY);
	return this.moveTo(this.x, destinationY, tile1, tile2);
}

Actor.prototype.moveDown = function(gamefield) {
	var destinationY = this.y + this.moveBy;
	var collisionTestY = destinationY + this.size;
	var tile1 = gamefield.getTileAt(this.x, collisionTestY);
	var tile2 = gamefield.getTileAt(this.x + this.size, collisionTestY);
	return this.moveTo(this.x, destinationY, tile1, tile2);
}

Actor.prototype.moveLeft = function(gamefield) {
	var destinationX = this.x - this.moveBy;
	var tile1 = gamefield.getTileAt(destinationX, this.y);
	var tile2 = gamefield.getTileAt(destinationX, this.y + this.size);
	return this.moveTo(destinationX, this.y, tile1, tile2);
}

Actor.prototype.moveRight = function(gamefield) {
	var destinationX = this.x + this.moveBy;
	var collisionTestX = destinationX + this.size;
	var tile1 = gamefield.getTileAt(collisionTestX, this.y);
	var tile2 = gamefield.getTileAt(collisionTestX, this.y + this.size);
	return this.moveTo(destinationX, this.y, tile1, tile2);
}

Actor.prototype.draw = function(ctx, cam) {
	ctx.drawImageRotated(images[2], this.x - cam.x + this.size / 2, this.y - cam.y + this.size / 2, this.rotation);
}
