const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const li = document.createElement('li');

  // Task text
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.onclick = () => toggleTaskCompleted(li);

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = () => deleteTask(li);

  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}

// Function to delete a task
function deleteTask(task) {
  taskList.removeChild(task);
}

// Function to toggle task completion
function toggleTaskCompleted(task) {
  task.classList.toggle('completed');
}

// Event listener for the add button
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing Enter key
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
