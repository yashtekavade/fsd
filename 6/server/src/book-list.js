// book-list.js

const setEditModal = (isbn) => {
  // Get information about the book using isbn
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", `http://localhost:3000/book/${isbn}`, false);
  xhttp.send();

  const book = JSON.parse(xhttp.responseText);

  const { title, author, publisher, publish_date, numOfPages } = book;

  // Filling information about the book in the form inside the modal
  document.getElementById("isbn").value = isbn;
  document.getElementById("title").value = title;
  document.getElementById("author").value = author;
  document.getElementById("publisher").value = publisher;
  document.getElementById("publish_date").value = publish_date;
  document.getElementById("numOfPages").value = numOfPages;

  // Setting up the action URL for the book
  document.getElementById(
    "editForm"
  ).action = `http://localhost:3000/book/${isbn}`;
};

const deleteBook = (isbn) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `http://localhost:3000/book/${isbn}`, false);
  xhttp.send();

  // Reloading the page
  location.reload();
};

const loadBooks = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/books", false);
  xhttp.send();

  const books = JSON.parse(xhttp.responseText);

  for (let book of books) {
    const x = `
          <div class="col-4">
              <div class="card">
                  <!-- Card content with book details -->
                  <button type="button" class="btn btn-danger" onclick="deleteBook('${book.isbn}')">Delete</button>
                  <button type="button" class="btn btn-primary" data-toggle="modal"
                      data-target="#editBookModal" onClick="setEditModal('${book.isbn}')">
                      Edit
                  </button>
              </div>
          </div>
      `;

    document.getElementById("books").innerHTML += x;
  }
};

loadBooks();
