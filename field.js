// Playing field class --------------------------------------
function Field(fieldsize, tilesize) {
	this.tiles = new Array();
	this.fieldsize = fieldsize;
	this.tilesize = tilesize;
	
	this.clear = function() {
		var obj = { walkable : false, tile : 0 };
		var obj2 = { walkable : true, tile : 1 };
		for (var y = 0; y < this.fieldsize; y++)
		for (var x = 0; x < this.fieldsize; x++) {
			if ( ((x%10 < 2) || (x%10 > 7)) && ((y%10 == 4 || y%10 == 5)))
				this.tiles.push(obj2);
			else if ( ((y%10 < 2) || (y%10 > 7)) && ((x%10 == 4 || x%10 == 5)))
				this.tiles.push(obj2);
			else if ( x%10 >= 2 && x%10 <= 7 && y%10 >= 2 && y%10 <= 7)
				this.tiles.push(obj2);			
			else this.tiles.push(obj);
		}	
	}

	this.clear();
	
	this.set = function(x, y, newobj) {
		var ix = x;
		var iy = y;
		if (ix < 0) ix = 0;
		if (iy < 0) iy = 0;
		if (ix >= this.fieldsize) ix = this.fieldsize - 1; 
		if (iy >= this.fieldsize) iy = this.fieldsize - 1; 
		var index = ix + this.fieldsize * iy;
		this.tiles[index] = newobj;
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
	
	this.draw = function(ctx, cam) {
		var ix = Math.floor(cam.x / this.tilesize);
		var iy = Math.floor(cam.y / this.tilesize);
		var ix2 = ix + Math.floor(width / this.tilesize) + this.tilesize;
		var iy2 = iy + Math.floor(height / this.tilesize) + this.tilesize;
		
		for (var x = ix; x < ix2; x++)
		for (var y = iy; y < iy2; y++) {
			var tile = this.get(x, y);	
			ctx.drawImage(images[tile.tile], 
				x * this.tilesize - cam.x, 
				y * this.tilesize - cam.y);
		}
	}
}

