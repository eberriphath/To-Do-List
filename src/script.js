
document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const taskValue = taskInput.value.trim();
        if (taskValue !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskValue;
            todoList.appendChild(listItem);
            taskInput.value = '';
        }
    });
});
