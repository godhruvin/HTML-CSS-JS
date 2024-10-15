// when the user click on the show Tasks it should show the tasks html .

// Function to display tasks
function displayTasks() {
    const taskListElement = document.getElementById('task-list');
    debugger;
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



// function to delete the task.
// logic : Adding event on click of delete button that will fetch the task from local storage and  removing it from the local storage.

function deleteTask(index) {
    const confirmDelete = confirm('Are You sure You want to Delete this task ?');

    if (confirmDelete) {
       
        // Fetch the tasks from the local storage.
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        //remove the task at specified index.
        tasks.splice(index, 1);

        // set the new tasks again into local storage.
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // refresh the new tasks and display to user.
        displayTasks();

    }
}

    // Edit task functionality
    // logic : when user click on the edit button of a task , that task title , due date and all should be fetched and added into the create Task form  and u can update the data there.

    function editTask(index) {
       // fetch the tasks from the local storage
       let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
       
    }
document.addEventListener('DOMContentLoaded', displayTasks);