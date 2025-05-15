// Hamburger Menu Functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when a link is clicked (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
let tasks = [];

function addTask() {
  const desc = document.getElementById('task-input').value;
  const priority = document.getElementById('priority').value;

  if (!desc.trim()) return;

  tasks.push({ desc, priority, completed: false });
  document.getElementById('task-input').value = '';
  renderTasks();
}

function renderTasks(filter = 'all') {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  const filtered = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'priority') return task.priority === 'high';
    return true;
  });

  filtered.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
  <div class="task-item ${task.priority}-priority ${task.completed ? 'completed' : ''}">
    <input type="checkbox" class="task-checkbox" 
           ${task.completed ? 'checked' : ''} 
           onclick="toggleComplete(${index})" />
    <span class="task-text">${task.desc}</span>
    <span class="priority-tag">${task.priority} priority</span>
  </div>
`;
list.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function filterTasks(filter) {
  renderTasks(filter);
}