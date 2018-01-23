class Library {
	constructor(){
		this.shelves = [];
	}
	addBook(newBook){
		this.shelves.push(newBook);
	}

	findBook(title){
		return this.shelves.filter(book => book.title == title)[0];
	}

	listBook(){
		var shelves = "";
		for (var i = 0; i < this.shelves.length; i++){
			shelves += this.shelves[i].name + " ";
		}
		return shelves;
	}
	removeBook(title) {
		for (var i = 0; i < this.shelves.length; i++) {
			if (this.shelves[i].title === title) {
				this.shelves.splice(i, 1);
			}
		}
	}
}


class Book {
	constructor(title, author, genre){
		this.title = title;
		this.author = author;
		this.genre = genre;
	}
}

var myShelf = new Library();
var first = new Book('First & Only', 'Dan Abnett', 'Scifi');
var necro = new Book('Necropolis', 'Dan Abnett', 'Scifi');
var honour = new Book('Honour Guard', 'Dan Abnett', 'Scifi');
var tanith = new Book('The guns of Tanith', 'Dan Abnett', 'Scifi');
var sabbat = new Book('Sabbat Martyr', 'Dan Abnett', 'Scifi');

myShelf.addBook(first);
myShelf.addBook(necro);
myShelf.addBook(honour);
myShelf.addBook(tanith);
myShelf.addBook(sabbat);
console.log(myShelf);
console.log(myShelf.findBook('First & Only'));
myShelf.removeBook('Necropolis');