// Selecting input and list elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to create a new to-do item
addButton.addEventListener('click', function() {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        // Create the list item
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        // Create the icon container
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('icons');

        // Create the edit icon
        const editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit', 'edit-icon');
        iconContainer.appendChild(editIcon);

        // Create the delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');
        iconContainer.appendChild(deleteIcon);

        // Append icons to the list item
        listItem.appendChild(iconContainer);

        // Add the list item to the list
        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = '';

        // Edit item functionality
        editIcon.addEventListener('click', function() {
            const newTaskText = prompt('Edit task:', taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskSpan.textContent = newTaskText;
            }
        });

        // Delete item functionality
        deleteIcon.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }
});