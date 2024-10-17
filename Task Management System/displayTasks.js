// Function to display tasks in respective status columns
function displayTasks() {
    const notStartedListElement = document.getElementById('not-started-column');
    const inProgressListElement = document.getElementById('in-progress-column');
    const completedListElement = document.getElementById('completed-column');

    // Clear the current task lists
    notStartedListElement.innerHTML = '<h3>Not Started</h3><p id="no-not-started" class="no-tasks-message" style="display: none;">No tasks in this status.</p>';
    inProgressListElement.innerHTML = '<h3>In Progress</h3><p id="no-in-progress" class="no-tasks-message" style="display: none;">No tasks in this status.</p>';
    completedListElement.innerHTML = '<h3>Completed</h3><p id="no-completed" class="no-tasks-message" style="display: none;">No tasks in this status.</p>';

    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Check if there are tasks
    if (tasks.length === 0) {
        document.getElementById('no-not-started').style.display = 'block';
        document.getElementById('no-in-progress').style.display = 'block';
        document.getElementById('no-completed').style.display = 'block';
    } else {
        // Hide the no-tasks messages
        document.getElementById('no-not-started').style.display = 'none';
        document.getElementById('no-in-progress').style.display = 'none';
        document.getElementById('no-completed').style.display = 'none';

        // Iterate over the tasks and categorize them based on status
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
               <div class="task-icons">
                    <i class="fa-solid fa-pen-to-square" id="editIcon" onclick="editTask(${index})" title="Edit Task"></i>
                    <i class="fa-solid fa-trash-can" id="deleteIcon" onclick="deleteTask(${index})" title="Delete Task"></i>
                </div>
            <div class="task-details">
                <h4 class="task-title">${task.title}</h4>
                <p class="task-description">${task.description}</p>
                <p class="task-due-date">Due Date: <strong>${task.dueDate}</strong></p>
                <p class="task-priority">Priority: <strong id="priority-${index}">${task.priority}</strong></p>
                <p class="task-status">Status: <strong>${task.status}</strong></p>
            </div>
            `;
            // Append the task item to the respective status column
            switch (task.status) {
                case 'Not-Started':
                    notStartedListElement.appendChild(taskItem);
                    break;
                case 'In-Progress':
                    inProgressListElement.appendChild(taskItem);
                    break;
                case 'Completed':
                    completedListElement.appendChild(taskItem);
                    break;
            }
            const priorityEl = document.getElementById(`priority-${index}`);
            if (task.priority === "Low") {
                priorityEl.style.color = 'green';
            } else if (task.priority === "Medium") {
                priorityEl.style.color = '#cc9900';
                priorityEl.style.backgroundColor = '#f0f0f0';
            } else if (task.priority === "High") {
                priorityEl.style.color = 'red';
            }
        });
    }
}
// Function to delete the task
function deleteTask(index) {
    const confirmationModal = document.getElementById('deleteModal');
    confirmationModal.style.display = 'block';

    document.getElementById('confirmDelete').onclick = function () {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        confirmationModal.style.display = 'none';
        displayTasks();
    };

    document.getElementById('cancelDelete').onclick = function () {
        confirmationModal.style.display = 'none';
    };

    document.getElementById('closeDeleteModal').onclick = function () {
        confirmationModal.style.display = 'none';
    };
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
    document.getElementById('task-form').reset();
    document.getElementById('edit-index').value = '';
    document.getElementById('model-title').innerHTML = 'Create Task';
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
    event.preventDefault();
    document.getElementById('titleError').style.display = 'none';
    document.getElementById('descriptionError').style.display = 'none';

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('Description').value.trim();
    const dueDate = document.getElementById('DueDate').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    console.log(priority)
    const status = document.querySelector('input[name="status"]:checked').value;

    let isValid = true;

    if (!title) {
        document.getElementById('titleError').innerText = 'Title is required.';
        document.getElementById('titleError').style.display = 'block';
        isValid = false;
    } else if (!/^[a-zA-Z0-9 ]+$/.test(title)) {
        document.getElementById('titleError').innerText = 'Title must be alphanumeric.';
        document.getElementById('titleError').style.display = 'block';
        isValid = false;
    }


    if (!description) {
        document.getElementById('descriptionError').innerText = 'Description is required.';
        document.getElementById('descriptionError').style.display = 'block';
        isValid = false;
    } else if (!/^[\s\S]*$/.test(description)) {
        document.getElementById('descriptionError').innerText = 'Description must be alphanumeric.';
        document.getElementById('descriptionError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const editIndex = document.getElementById('edit-index').value;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || []

        if (editIndex) {
            tasks[editIndex] = {
                title,
                description,
                dueDate,
                priority,
                status
            };
        } else {

            const newTask = {
                title,
                description,
                dueDate,
                priority,
                status
            };
            tasks.push(newTask);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));


        document.getElementById('task-form').reset();
        document.getElementById('edit-index').value = '';

        document.getElementById('createTaskModal').style.display = 'none';


        displayTasks();
    }
};

// Function to filter tasks based on search input
function filterTasks(e) {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const priorityFilter = document.getElementById('priorityFilter');
    const statusFilter = document.getElementById('statusFilter');
    const notStartedListElement = document.getElementById('not-started-column');
    const inProgressListElement = document.getElementById('in-progress-column');
    const completedListElement = document.getElementById('completed-column');

    // Clear the current task lists
    notStartedListElement.innerHTML = '<h3>Not Started</h3><p id="no-not-started" class="no-tasks-message" style="display: none;">No tasks in this status.</p>';
    inProgressListElement.innerHTML = '<h3>In Progress</h3><p id="no-in-progress" class="no-tasks-message" style="display: none;">No tasks in this status.</p>';
    completedListElement.innerHTML = '<h3>Completed</h3><p id="no-completed" class="no-tasks-message" style="display: none;">No tasks in this status.</p>';

    // Get tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Check if there are tasks
    if (tasks.length === 0) {
        document.getElementById('no-not-started').style.display = 'block';
        document.getElementById('no-in-progress').style.display = 'block';
        document.getElementById('no-completed').style.display = 'block';
    } else {
        // Hide the no-tasks messages
        document.getElementById('no-not-started').style.display = 'none';
        document.getElementById('no-in-progress').style.display = 'none';
        document.getElementById('no-completed').style.display = 'none';

        // Initialize a variable to track if any tasks matched the search
        let anyTaskMatched = false;

        tasks.forEach((task, index) => {
            const matchesSearch = task.title.toLowerCase().includes(searchTerm) ||
                task.description.toLowerCase().includes(searchTerm);

            const prioritySearch = (priorityFilter.value === "All" || task.priority === priorityFilter.value);
            const statusSearch = (statusFilter.value === "All" || task.status === statusFilter.value);

            // Only append the task item if it matches the search
            if (matchesSearch && prioritySearch && statusSearch) {
                anyTaskMatched = true;

                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <div class="task-icons">
                        <i class="fa-solid fa-pen-to-square" id="editIcon" onclick="editTask(${index})" title="Edit Task"></i>
                        <i class="fa-solid fa-trash-can" id="deleteIcon" onclick="deleteTask(${index})" title="Delete Task"></i>
                    </div>
                    <div class="task-details">
                        <h4 class="task-title">${task.title}</h4>
                        <p class="task-description">${task.description}</p>
                        <p class="task-due-date">Due Date: <strong>${task.dueDate}</strong></p>
                        <p class="task-priority">Priority: <strong id="priority-${index}">${task.priority}</strong></p>
                        <p class="task-status">Status: <strong>${task.status}</strong></p>
                    </div>
                `;

                const priorityEl = taskItem.querySelector(`strong[id="priority-${index}"]`); // Select the priority within the new taskItem
                if (task.priority === "Low") {
                    priorityEl.style.color = 'green';
                } else if (task.priority === "Medium") {
                    priorityEl.style.color = '#cc9900';
                    priorityEl.style.backgroundColor = '#f0f0f0';
                } else if (task.priority === "High") {
                    priorityEl.style.color = 'red';
                }

                // Append the task item to the respective status column
                switch (task.status) {
                    case 'Not-Started':
                        notStartedListElement.appendChild(taskItem);
                        break;
                    case 'In-Progress':
                        inProgressListElement.appendChild(taskItem);
                        break;
                    case 'Completed':
                        completedListElement.appendChild(taskItem);
                        break;
                }
            }
        });

        // If no tasks matched the search term, display the no tasks message in the respective columns
        if (!anyTaskMatched) {
            document.getElementById('no-not-started').style.display = 'block';
            document.getElementById('no-in-progress').style.display = 'block';
            document.getElementById('no-completed').style.display = 'block';
        }
    }
}

// Add event listener for search bar to filter tasks as user types
document.getElementById('searchBar').addEventListener('keyup', filterTasks);
document.getElementById('priorityFilter').addEventListener('change', filterTasks);
document.getElementById('statusFilter').addEventListener('change', filterTasks);
displayTasks();

