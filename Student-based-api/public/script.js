document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("studentTableBody");
    const addBtn = document.getElementById("addStudent");

    // Load existing students
    function loadStudents() {
        fetch("http://localhost:3000/students")
            .then(res => res.json())
            .then(data => {
                tableBody.innerHTML = "";
                data.forEach((student, index) => {
                    const row = `
            <tr>
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.course}</td>
              <td>${student.age}</td>
              <td>${student.city}</td>
            </tr>`;
                    tableBody.innerHTML += row;
                });
            })
            .catch(err => console.error("Error loading students:", err));
    }

    // Add student
    addBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value.trim();
        const course = document.getElementById("course").value.trim();
        const age = document.getElementById("age").value.trim();
        const city = document.getElementById("city").value.trim();

        if (!name || !course || !age || !city) {
            alert("Please fill all fields!");
            return;
        }

        const newStudent = { name, course, age, city };

        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent),
        })
            .then(res => res.json())
            .then(() => loadStudents())
            .catch(err => console.error("Error adding student:", err));
    });

    loadStudents();
});