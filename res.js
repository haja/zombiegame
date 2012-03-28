var images = new Array();
var imageLoadCount = 0;

function ResourcesLoaded() {
	return (imageLoadCount / images.length);
}

function LoadImage(path) {
	var image = new Image();
	image.onLoad = function() {
		++imageLoadCount();
	}
	image.src = path;
	images.push(image);
}

function LoadResources() {
	LoadImage("blocking.png");
	LoadImage("nonblocking.png");
	LoadImage("player.png");
}
