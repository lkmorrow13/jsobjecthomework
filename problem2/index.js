class Album {
	constructor(){
		this.photos = [];
	}
	addPhoto(newPhoto){
		this.photos.push(newPhoto);
	}
	listPhotos(){
		var pictures = "";
		for (var i = 0; i < this.photos.length; i++){
			pictures += this.photos[i].name + " ";
		}
		return pictures;
	}
	selectPhoto(m){
		return this.photos[m];
	}
}

class Photo {
	constructor(name, location){
		this.name = name;
		this.location = location;
	}
}

var myAlbum = new Album();
var kittyPhoto = new Photo('kitty.jpg', 'utah');
var sushiPhoto = new Photo('sushi.jpg', 'japan');
var ramenPhoto = new Photo('shoyu-ramen.jpg', 'osaka');
console.log(myAlbum.photos);
myAlbum.addPhoto(kittyPhoto);
console.log(myAlbum.photos);
myAlbum.addPhoto(sushiPhoto);
myAlbum.addPhoto(ramenPhoto);
console.log(myAlbum.listPhotos());
console.log(myAlbum.selectPhoto(1));
