"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

// Book collection
const books = [
    new Book("1984", "George Orwell", "ISBN101"),
    new Book("Harry Potter", "J.K. Rowling", "ISBN102"),
    new Book("The Hobbit", "Tolkien", "ISBN103", true)
];

// Display available (not issued) books
console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

// Issue book based on ISBN
function issueByISBN(code) {
    const book = books.find(b => b.isbn === code);
    if (book) {
        book.issueBook();
        console.log(`${book.title} is now issued.`);
    } else {
        console.log("Book not found.");
    }
}

issueByISBN("ISBN101");
