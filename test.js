const axios = require('axios');

// Task 10 - async/await
async function getAllBooks() {
  const res = await axios.get('http://localhost:5000/');
  console.log("All Books:", res.data);
}

// Task 11 - Promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:5000/isbn/${isbn}`)
    .then(res => console.log("Book by ISBN:", res.data))
    .catch(err => console.log(err.message));
}

// Task 12 - Author
async function getBooksByAuthor(author) {
  const res = await axios.get(`http://localhost:5000/author/${author}`);
  console.log("Books by Author:", res.data);
}

// Task 13 - Title
async function getBooksByTitle(title) {
  const res = await axios.get(`http://localhost:5000/title/${title}`);
  console.log("Books by Title:", res.data);
}

// Call all for test
getAllBooks();
getBookByISBN("111");
getBooksByAuthor("J.K. Rowling");
getBooksByTitle("Harry Potter");
