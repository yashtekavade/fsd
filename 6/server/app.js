const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
