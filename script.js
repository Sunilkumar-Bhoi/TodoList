// DOM Elements
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority');
const taskList = document.getElementById('task-list');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Initialize tasks array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Hamburger menu functionality
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Add new task
function addTask() {
  const description = taskInput.value.trim();
  const priority = prioritySelect.value;
  
  if (description) {
    const newTask = {
      id: Date.now(),
      desc: description,
      priority,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
  }
}

// Render all tasks
function renderTasks(filter = 'all') {
  taskList.innerHTML = '';
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'priority') return task.priority === 'high';
    return true;
  });
  
  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = `task-item ${task.priority}-priority ${task.completed ? 'completed' : ''}`;
    
    taskItem.innerHTML = `
      <input type="checkbox" class="task-checkbox" 
             ${task.completed ? 'checked' : ''} 
             onclick="toggleComplete(${index})" />
      <span class="task-text">${task.desc}</span>
      <span class="priority-tag">${task.priority} priority</span>
      <div class="task-actions">
        <button class="task-btn edit" onclick="editTask(${index})">
          <i class="fas fa-edit"></i>
        </button>
        <button class="task-btn delete" onclick="deleteTask(${index})">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    
    taskList.appendChild(taskItem);
  });
}

// Toggle task completion
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Edit task
function editTask(index) {
  const newDesc = prompt('Edit task:', tasks[index].desc);
  if (newDesc !== null) {
    tasks[index].desc = newDesc.trim();
    saveTasks();
    renderTasks();
  }
}

// Filter tasks
function filterTasks(filter) {
  renderTasks(filter);
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  
  // Add task on Enter key
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
});