function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}
