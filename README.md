#To-Do List Application

A clean, responsive to-do list application with priority management and task filtering capabilities.

## Features

- ✅ Add tasks with priority levels (Low, Medium, High)
- ✔️ Mark tasks as complete
- 🔍 Filter tasks by status (All/Completed/Pending) or priority
- 📱 Fully responsive design with mobile-friendly hamburger menu
- 🎨 Modern UI with subtle animations and visual feedback
- 💾 Local storage persistence (if implemented in your JS)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript
- Font Awesome (for icons)

## Installation

No installation required! Simply open `index.html` in your browser.

## Usage

1. **Add a Task**:
   - Type your task description in the input field
   - Select priority level
   - Click "Add" button or press Enter

2. **Manage Tasks**:
   - Check the checkbox to mark as complete
   - Use the filter buttons to view specific tasks
   - Edit/Delete buttons for task management (if implemented)

3. **Mobile View**:
   - Tap the hamburger menu (☰) to access navigation
   - Swipe-friendly interface

## Project Structure

```
todo-list/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Customization

You can easily customize the app by modifying the CSS variables in the `:root` selector:

```css
:root {
  --primary: #000000;
  --background: #F8F9FA;
  /* ...other variables */
}
```

## Browser Support

The app works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- [ ] Add due dates for tasks
- [ ] Implement task categories/tags
- [ ] Dark mode support
- [ ] Drag-and-drop reordering
- [ ] User accounts and cloud sync

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.