const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

// Routes for books
router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:isbn", bookController.getBookByISBN);
router.put("/:isbn", bookController.updateBook);
router.delete("/:isbn", bookController.deleteBook);

module.exports = router;
