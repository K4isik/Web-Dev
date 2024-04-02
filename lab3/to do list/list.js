const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add todo item
function addTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <span class="delete-btn">❌</span>
    `;
    todoList.appendChild(todoItem);
}

// Handle form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

// Handle checkbox toggle
todoList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
        const todoItem = event.target.parentElement;
        todoItem.classList.toggle('completed');
    }
});

// Handle delete button click
todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const todoItem = event.target.parentElement;
        todoList.removeChild(todoItem);
    }
});