const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

// ✅ Enable CORS so frontend can access backend
app.use(cors());

// ✅ Enable JSON body parsing
app.use(express.json());

// ✅ Serve static files (frontend)
app.use(express.static("public"));

const mongouri = process.env.mongouri
// ✅ Connect MongoDB
mongoose.connect(mongouri)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Create student schema and model
const studentSchema = new mongoose.Schema({
  name: String,
  course: String,
  age: Number,
  city: String
});

const Student = mongoose.model("Student", studentSchema);

// ✅ Get all students
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// ✅ Add a new student
app.post("/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

// ✅ Update a student
app.put("/students/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// ✅ Delete a student
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

// ✅ Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));