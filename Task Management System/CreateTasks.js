

// Function to create the Tasks

document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // get the form values

    let title = document.getElementById('title').value;
    let description = document.getElementById('Description').value;
    let due_date = document.getElementById('Due Date').value;
    let status = document.querySelector('input[name="Status"]:checked').value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    const Newtask = {
        title: title,
        description: description,
        dueDate: due_date,
        priority: priority,
        status: status,
    }

    // Get the existing data from the local storage.
    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(Newtask);
    // store the data again into the Local Storage.
    localStorage.setItem('tasks', JSON.stringify(tasks));
    window.location.href = `/Task Management System/DisplayTask.html`;
})