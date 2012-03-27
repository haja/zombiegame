// Playing field class --------------------------------------
function Field(fieldsize, tilesize) {
	this.tiles = new Array();
	this.fieldsize = fieldsize;
	this.tilesize = tilesize;
	
	for (var i = 0; i < fieldsize * fieldsize; i++) {
		var obj = { walkable : false, tile : 0 };
		this.tiles.push(obj);
	}
	
	this.get = function(x, y) {
		var ix = x;
		var iy = y;
		if (ix < 0) ix = 0;
		if (iy < 0) iy = 0;
		if (ix >= this.fieldsize) ix = this.fieldsize - 1; 
		if (iy >= this.fieldsize) iy = this.fieldsize - 1; 
		var index = ix + this.fieldsize * iy;
		return this.tiles[index];
	}
	
	this.getTileAt = function(x, y) {
		return this.get(
			Math.floor(x / this.tilesize),
			Math.floor(y / this.tilesize)
		);
	}
	
	this.draw = function(ctx) {
		for (var x = 0; x < this.fieldsize; x++)
		for (var y = 0; y < this.fieldsize; y++) {
			var tile = this.get(x, y);	
			ctx.drawImage(images[tile.tile], x * this.tilesize, y * this.tilesize);
		}
	}
}

