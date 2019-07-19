(() => {
    const user = 'test';
    const password = 'test123';
    const headers = {
        "Authorization": `Basic ${btoa(`${user}:${password}`)}`,
        "Content-Type": "application/json"
    }

    let studentsContainer = document.querySelector('tbody');

    let idInput = document.getElementById('id');
    let firstNameInput = document.getElementById('firstName');
    let lastNameInput = document.getElementById('lastName');
    let facultyNumberInput = document.getElementById('facultyNumber');
    let gradeInput = document.getElementById('grade');
    let addBtn = document.querySelector('form button');

    let loadBtn = document.getElementById('loadBtn');

    addBtn.addEventListener('click', addStudent);
    loadBtn.addEventListener('click', loadStudents);

    function addStudent(){
        if(idInput === '' || firstNameInput.value === '' || lastNameInput.value === '' || facultyNumberInput.value === '' || gradeInput.value === ''){
            return;
        }

        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/students`;

        let student = {
            id: idInput.value,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: gradeInput.value
        }

        let body = JSON.stringify(student);

        fetch(url, {
            method: 'POST',
            headers,
            body
        })
        .catch(err => console.log(err));

        displayStudent(student);
        
        idInput.value = '';
        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }

    function loadStudents(){
        studentsContainer.innerHTML = '';
        
        const url = `https://baas.kinvey.com/appdata/kid_rJ5mfI3WH/students`;

        fetch(url, {
            headers
        })
        .then(response => response.json())
        .then(students => {
           for (const student of students.sort((a, b) => a.id - b.id)) {
                displayStudent(student);
           }
        })
        .catch(err => console.log(err));
    }

    function displayStudent(student){
        
        let tableRow = document.createElement('tr');
        studentsContainer.appendChild(tableRow);
        tableRow.innerHTML =
        `<td>${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.facultyNumber}</td>
        <td>${student.grade}</td>`;
    }
})()