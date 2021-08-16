const express = require("express");

const App = express();

let Database = require("./database");

App.get("/", (req, res) => {
    res.json({message: "Test Server is Running"});
});

// Route    - /book
// Des      - To get all books
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
App.get("/book", (req, res) =>{
    return res.json({Books: Database.Book});
});

// Route    - /book/:bookName
// Des      - To get a specific books by bookID
// Access   - Public
// Method   - GET
// Params   - bookName
// Body     - none
App.get("/book/:bookID", (req, res) => {
    const bookName = Database.Book.filter((book) => book.ISBN === req.params.bookID);
    return res.json({Books: bookName});
});

// Route    - /book/c/:category
// Des      - To get a specific books by category
// Access   - Public
// Method   - GET
// Params   - category
// Body     - none
App.get("/book/c/:category", (req, res) => {
    const bookName = Database.Book.filter((book) => book.category.includes(req.params.category));
    return res.json({Books: bookName});
});

// Route    - /book/a/:authorID
// Des      - To get a specific books by authorID
// Access   - Public
// Method   - GET
// Params   - authorID
// Body     - none
App.get("/book/a/:authorID", (req, res) => {
    const autId = parseInt(req.params.authorID, 10);
    const bookName = Database.Book.filter((book) => book.authors.includes(autId));
    return res.json({Books: bookName});
});




// Route    - /author
// Des      - To get all authors
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
App.get("/author", (req, res) => {
    return res.json({Author: Database.Author});
});

// Route    - /author/:authorID
// Des      - To get a author by authorID
// Access   - Public
// Method   - GET
// Params   - authorID
// Body     - none
App.get("/author/:authorID", (req, res) => {
    const autId = parseInt(req.params.authorID, 10);
    const authorName = Database.Author.filter((author) => author.id === autId);
    return res.json({Author: authorName});
});

// Route    - /author/b/:bookID
// Des      - To get a list of authors based on bookID
// Access   - Public
// Method   - GET
// Params   - bookID
// Body     - none
App.get("/author/b/:bookID", (req, res) => {
    const authorName = Database.Author.filter((author) => author.books.includes(req.params.bookID));
    return res.json({Author: authorName});
});







// Route    - /publication
// Des      - To get all publications
// Access   - Public
// Method   - GET
// Params   - none
// Body     - none
App.get("/publication", (req, res) => {
    return res.json({Publication: Database.Publication});
});

// Route    - /publication/:publicationID
// Des      - To get all publications
// Access   - Public
// Method   - GET
// Params   - publicationID
// Body     - none
App.get("/publication/:publicationID", (req, res) => {
    const pubID = parseInt(req.params.publicationID);
    const publicationName = Database.Publication.filter((pub) => pub.id === pubID);
    return res.json({Publication: publicationName});
});

// Route    - /publication/b/:bookID
// Des      - To get a list of publications based on bookID
// Access   - Public
// Method   - GET
// Params   - bookID
// Body     - none
App.get("/publication/b/:bookID", (req, res) => {
    const publicationName = Database.Publication.filter((pub) => pub.books.includes(req.params.bookID));
    return res.json({Publication: publicationName});
});






App.listen(4000, () => console.log("Test Run"));