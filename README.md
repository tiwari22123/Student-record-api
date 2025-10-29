# Student-record-api
Student-Based API












The Student-Based API is a simple RESTful API project designed to manage student records efficiently using Node.js, Express.js, and MongoDB.
It supports full CRUD operations (Create, Read, Update, Delete) and connects the backend API with a minimal frontend (HTML/CSS + Fetch API) to display and manage student data.

🎯 Goal

The primary goal of this project is to create an interactive student management system that allows performing CRUD operations on a student database through an Express-based API and a simple frontend interface.

This project demonstrates how the backend (API) and frontend (client-side) communicate seamlessly using HTTP requests.

📋 Schema Structure

Each student record in MongoDB follows a defined schema using Mongoose.

{
  name: String,
  course: String,
  age: Number,
  city: String
}


Explanation:

name: Student’s full name

course: The enrolled course or department

age: Student’s current age

city: City or hometown of the student

Basic validation ensures that the name and course fields are mandatory before data is saved.

⚙️ How It Works

The backend server runs with Express.js, serving both the API and static frontend files.

The frontend (index.html) is stored inside the public/ folder.

When the user loads the page, the browser fetches student data via

fetch("http://localhost:3000/students")


The backend connects to MongoDB and retrieves the records through Mongoose.

Users can:

View the list of all students

Add a new student (POST)

Update existing student details (PUT)

Delete a student record (DELETE)

🔗 API Endpoints
Method	Endpoint	Description
GET	/students	Fetch all student records
POST	/students	Add a new student
PUT	/students/:id	Update existing student
DELETE	/students/:id	Delete a student

Example Request Body (POST):

{
  "name": "Adya Tiwari",
  "course": "B.Tech",
  "age": 21,
  "city": "Lucknow"
}

🧩 Project Structure
STUDENT-BASED-API/
│
├── index.js                 # Main server file
├── package.json             # Node.js dependencies
├── .gitignore               # Ignored files for Git
├── LICENSE                  # Project License (MIT)
├── README.md                # Project Documentation
│
├── public/                  # Frontend folder
│   ├── index.html           # Frontend UI
│   ├── style.css            # Styling for the frontend
│   └── script.js            # Fetch API logic
│
└── models/
    └── studentModel.js      # MongoDB schema using Mongoose

🧠 Technologies Used
Layer	Technology	Purpose
Backend	Node.js	Server environment
Framework	Express.js	API routing and middleware
Database	MongoDB (Mongoose)	Data storage and modeling
Frontend	HTML, CSS, JavaScript	UI for data interaction
API Testing	Postman	Route testing and validation
🌐 Frontend Overview

The frontend interface is built using HTML, CSS, and vanilla JavaScript.

It connects to the backend API using the Fetch API.

Students’ data is displayed dynamically on the page.

Each record can be added, updated, or deleted through button interactions that trigger API requests.

💡 Example Flow

User Input:
User fills out a form with Name, Course, Age, and City.

Data Transfer:
JavaScript uses fetch() to send a POST request to /students.

Backend Process:
Express.js receives the request → validates data → stores it in MongoDB.

Frontend Update:
Once the operation is successful, the frontend automatically refreshes the student list.

🗂️ Database Connection

The API uses Mongoose to connect to MongoDB.
Example connection snippet (in index.js):

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

🪄 Example Response (GET /students)
[
  {
    "_id": "671f01b5ac4d23b9a73a9081",
    "name": "Adya Tiwari",
    "course": "B.Tech",
    "age": 21,
    "city": "Lucknow",
    "__v": 0
  },
  {
    "_id": "671f0229ac4d23b9a73a9083",
    "name": "Priya Sharma",
    "course": "MCA",
    "age": 23,
    "city": "Delhi",
    "__v": 0
  }
]

📘 License

This project is licensed under the MIT License — you can use, modify, and distribute it freely with attribution.

👩‍💻 Author

Adya Tiwari
📧 Email: adyatiwari227@gmail.com
💻 GitHub Profile(https://github.com/tiwari22123)