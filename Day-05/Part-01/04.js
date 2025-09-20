/*
4.Create an array of objects that represent books with 
properties for title, author, and page count. Write a 
function that takes the array as a parameter and returns 
a new array of objects with a new property summary that
contains a summary string of the book's title and 
author.
 */

const books = [
  { title: "1984", author: "George Orwell", pageCount: 328 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pageCount: 180 }
];

function addBookSummaries(bookArray) {
  return bookArray.map(book => {
    return {
      ...book,
      summary: `${book.title} by ${book.author}`
    };
  });
}

const booksWithSummaries = addBookSummaries(books);
console.log(booksWithSummaries);
