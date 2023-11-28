const books = require("../models/bookModel");

const createBook = (req, res) => {
  const book = req.body;
  books.push(book);
  res.json({ message: "Book added successfully", book });
};

const getAllBooks = (req, res) => {
  res.json(books);
};

const getBookByISBN = (req, res) => {
  const isbn = req.params.isbn;
  const book = books.find((b) => b.isbn === isbn);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

const updateBook = (req, res) => {
  const isbn = req.params.isbn;
  const updatedBook = req.body;

  books = books.map((book) => (book.isbn === isbn ? updatedBook : book));

  res.json({ message: "Book updated successfully", book: updatedBook });
};

const deleteBook = (req, res) => {
  const isbn = req.params.isbn;
  books = books.filter((book) => book.isbn !== isbn);
  res.json({ message: "Book deleted successfully", isbn });
};

module.exports = {
  createBook,
  getAllBooks,
  getBookByISBN,
  updateBook,
  deleteBook,
};
