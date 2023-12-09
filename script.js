document.addEventListener('DOMContentLoaded', function () {
    
    const students = JSON.parse(localStorage.getItem('students')) || [];
    updateStudentList(students);

    document.getElementById('addStudentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const studentName = document.getElementById('studentName').value;
        if (studentName) {
            const newStudent = { name: studentName };
            students.push(newStudent);
            updateStudentList(students);
            updateLocalStorage(students);
            document.getElementById('studentName').value = '';
        }
    });

  
    function updateStudentList(studentArray) {
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = '';
        studentArray.forEach(function (student, index) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${student.name}</span>
                <button onclick="removeStudent(${index})">Rimuovi</button>
            `;
            studentList.appendChild(li);
        });
    }

 
    window.removeStudent = function (index) {
        students.splice(index, 1);
        updateStudentList(students);
        updateLocalStorage(students);
    };

   
    function updateLocalStorage(data) {
        localStorage.setItem('students', JSON.stringify(data));
    }
});

