const express = require('express');
let books = require('../booksdb.js');
const public_users = express.Router();

// Task 1 - Get all books
public_users.get('/', (req, res) => {
  return res.status(200).json(books);
});

// Task 2 - Get book by ISBN
public_users.get('/isbn/:isbn', (req, res) => {
  let isbn = req.params.isbn;
  for (let key in books) {
    if (books[key].ISBN === isbn) return res.json(books[key]);
  }
  return res.status(404).send("Book not found");
});

// Task 3 - Get books by author
public_users.get('/author/:author', (req, res) => {
  let author = req.params.author;
  let result = Object.values(books).filter(b => b.author === author);
  res.json(result);
});

// Task 4 - Get books by title
public_users.get('/title/:title', (req, res) => {
  let title = req.params.title;
  let result = Object.values(books).filter(b => b.title === title);
  res.json(result);
});

// Task 5 - Get book review
public_users.get('/review/:isbn', (req, res) => {
  let isbn = req.params.isbn;
  for (let key in books) {
    if (books[key].ISBN === isbn) return res.json(books[key].reviews);
  }
  res.status(404).send("Review not found");
});

// Simple in-memory user storage
let users = [];

// Task 6 - Register new user
public_users.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    users.push({ username, password });
    return res.status(200).send("User registered successfully");
  }
  res.status(400).send("Invalid input");
});

// Task 7 - Login
public_users.post('/login', (req, res) => {
  const { username, password } = req.body;
  const found = users.find(u => u.username === username && u.password === password);
  if (found) return res.status(200).send("Login successful");
  res.status(401).send("Invalid credentials");
});

module.exports.general = public_users;
