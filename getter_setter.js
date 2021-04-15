class Book {
    constructor(author) {
        this._author = author;
    }

    get writer() {
        return this._author;
    }

    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

module.exports = Book;

// var book = new Book("Olanrewaju Tobi");
// console.log(book.writer);