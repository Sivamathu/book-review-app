# Coursera Book Review App

A simple **Node.js + Express** app built for the Coursera Peer-Graded Assignment.

This project demonstrates building REST APIs for general and registered users, and interacting with them using **Axios** in Node.js with **async/await** and **Promises**.

---

## Project Overview

The Book Review App allows users to:
- View all books
- Search books by ISBN, Author, or Title
- View book reviews
- Register and login as users
- Add, modify, and delete book reviews (registered users only)

---

## Project Setup

### 1️⃣ Initialize Node.js project
Open your terminal in the project folder and run:

```bash
npm init -y

```

### 2️⃣Install Dependencies
Install Express for the web server and Axios for making HTTP requests.

npm install express axios

### 3️⃣ Optional: Create .gitignore
To exclude node_modules/ and other sensitive files from version control, create a .gitignore file.

node_modules/
.env

### 📁 Project Files
server.js → Main server file (Express APIs)

booksdb.js → Book database (mock data)

router/ → Contains the route files for general and authenticated users

test.js → Axios client for testing API endpoints

package.json → Project dependencies and scripts

.gitignore → Specifies intentionally untracked files to ignore

README.md → Project description

### 🚀 Running the Project
1️⃣ Start the Server
Run the main server file. This will start the API server.

node server.js

You should see the following confirmation in your terminal:

Server running on port 5000

2️⃣ Run Test File
In a new terminal window, run the test script to send requests to your running server.

node test.js

You will see the output from various API calls, such as fetching all books, searching by author, etc.

Endpoints
General Users (No Authentication Required)
GET / → Get a list of all books.

GET /isbn/:isbn → Get book details by ISBN.

GET /author/:author → Get books by a specific author.

GET /title/:title → Get books by title.

GET /review/:isbn → Get all reviews for a specific book.

POST /register → Register a new user.

POST /login → Login to get an access token.

Registered Users (Authentication Required)
PUT /auth/review/:isbn → Add or modify a book review.

DELETE /auth/review/:isbn → Delete your book review.

📝 Submission Guidelines
📸 Screenshots for Coursera
server-running-terminal.png → Terminal showing the server is running.

test-output-terminal.png → Terminal showing the output from node test.js.

postman_get_all_books.png → Postman response for the GET / request.

postman_get_isbn.png → Postman response for GET /isbn/:id.

postman_register_login.png → Postman response for user registration and login.

postman_review_add_modify.png → Postman response for PUT /auth/review/:isbn.

github_repo_page.png → A screenshot of your main GitHub repository page.

🔗 GitHub Repository
Ensure your repository is public for peer grading. The URL should follow this format:
https://github.com/YOUR_USERNAME/book-review-app

💡 Notes
Always start server.js before running test.js to avoid connection errors.

The async API requests in test.js are designed to use async/await and Promises as required by the assignment.
