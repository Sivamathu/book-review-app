const express = require('express');
let books = require('../booksdb.js');
const regd_users = express.Router();

// Task 8 - Add or modify review
regd_users.put('/auth/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const { username, review } = req.body;
  for (let key in books) {
    if (books[key].ISBN === isbn) {
      books[key].reviews[username] = review;
      return res.status(200).send("Review added/updated");
    }
  }
  res.status(404).send("Book not found");
});

// Task 9 - Delete review
regd_users.delete('/auth/review/:isbn', (req, res) => {
  const isbn = req.params.isbn;
  const { username } = req.body;
  for (let key in books) {
    if (books[key].ISBN === isbn && books[key].reviews[username]) {
      delete books[key].reviews[username];
      return res.status(200).send("Review deleted");
    }
  }
  res.status(404).send("Review not found");
});

module.exports.authenticated = regd_users;
