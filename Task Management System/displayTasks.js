// Function to display tasks
function displayTasks() {
    const taskListElement = document.getElementById('task-list');
    const noTasksMessage = document.getElementById('no-tasks-message');

    // Clear the current task list
    taskListElement.innerHTML = '';

    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (tasks.length === 0) {
        // If there are no tasks, show the message
        noTasksMessage.style.display = 'block';
    } else {
        // Hide the no-tasks message
        noTasksMessage.style.display = 'none';

        // Iterate over the tasks and create HTML elements for each
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <div class="task-details">
                    <h3 class="task-title">${task.title}</h3>
                    <p class="task-description">${task.description}</p>
                    <p class="task-due-date">Due Date: <strong>${task.dueDate}</strong></p>
                    <p class="task-priority">Priority: <strong>${task.priority}</strong></p>
                    <p class="task-status">Status: <strong>${task.status}</strong></p>
                </div>
                <div class="task-actions">
                    <button class="edit-button" onclick="editTask(${index})">Edit</button>
                    <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskListElement.appendChild(taskItem);
        });
    }
}

// Function to delete the task
function deleteTask(index) {
    const confirmDelete = confirm('Are you sure you want to delete this task?');

    if (confirmDelete) {
        // Fetch the tasks from local storage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Remove the task at the specified index
        tasks.splice(index, 1);

        // Set the new tasks again into local storage
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Refresh the task list
        displayTasks();
    }
}

// Edit task functionality
function editTask(index) {
    // Fetch the tasks from storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    // Set the values of the task to the fields in the form
    document.getElementById('title').value = task.title;
    document.getElementById('Description').value = task.description;
    document.getElementById('DueDate').value = task.dueDate;

    document.querySelector(`input[name="priority"][value="${task.priority}"]`).checked = true;
    document.querySelector(`input[name="status"][value="${task.status}"]`).checked = true;

    document.getElementById('edit-index').value = index; // Set the index for editing

    // Show the modal
    document.getElementById('createTaskModal').style.display = 'block';
    document.getElementById('model-title').innerHTML = `Edit Task`;
}

// Function to show the modal when the add task icon is clicked
document.getElementById('addTaskIcon').onclick = function () {
    document.getElementById('createTaskModal').style.display = 'block';
    document.getElementById('task-form').reset(); // Reset the form fields
    document.getElementById('edit-index').value = ''; // Clear the edit index
};

// Function to close the modal
document.getElementById('closeModal').onclick = function () {
    document.getElementById('createTaskModal').style.display = 'none';
};

// Close the modal when clicking cancel button
document.getElementById('cancelButton').onclick = function () {
    document.getElementById('createTaskModal').style.display = 'none';
};

// Save or edit task on form submission
document.getElementById('task-form').onsubmit = function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const title = document.getElementById('title').value; // Get task title
    const description = document.getElementById('Description').value; // Get task description
    const dueDate = document.getElementById('DueDate').value; // Get task due date
    const priority = document.querySelector('input[name="priority"]:checked').value; // Get selected priority
    const status = document.querySelector('input[name="status"]:checked').value; // Get selected status

    // Get the edit index (if any)
    const editIndex = document.getElementById('edit-index').value;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Fetch tasks from localStorage

    // Check if editing an existing task
    if (editIndex) {
        // If editing, update the task at the edit index
        tasks[editIndex] = {
            title,
            description,
            dueDate,
            priority,
            status
        };
    } else {
        // If adding a new task, create a new task object
        const newTask = {
            title,
            description,
            dueDate,
            priority,
            status
        };
        tasks.push(newTask); // Add the new task to the tasks array
    }

    // Save the updated tasks back to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Reset the form fields after saving
    document.getElementById('task-form').reset(); // Clear the form fields
    document.getElementById('edit-index').value = ''; // Clear the edit index

    // Hide the modal
    document.getElementById('createTaskModal').style.display = 'none';

    // Refresh the task list to reflect changes
    displayTasks();
};

// Initial call to display tasks on page load
displayTasks();
