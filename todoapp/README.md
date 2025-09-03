# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📝 To-Do App

A simple, elegant, and responsive To-Do List Application built with React.
The app helps you manage your tasks with features like add, edit, complete, and delete.
Minimal design — following the “less is more” principle.

## 🚀 Features

➕ Add new tasks to your wish list.

✏️ Edit existing tasks with inline editing and auto-focus.

✅ Mark tasks as completed (with strike-through effect).

❌ Delete tasks permanently.

🎨 Clean, responsive, and minimal UI/UX.

📦 Built with React and styled with custom CSS + FontAwesome icons.

## 🖥️ Screenshots

Empty State

When no tasks are added:

With Tasks

Managing tasks (add/edit/complete/delete):

## 🛠️ Tech Stack

React (Create React App / Vite / Next.js — depending on your setup)

FontAwesome (icons for actions)

CSS3 (custom styles)
````markdown
## ⚙️ Installation & Setup

1. Clone this repository:
  ```bash
  git clone https://github.com/Sawarn007/Frontend-React-Projects/tree/main/todoapp.git

# Navigate to project folder

cd todo-app

# Install dependencies

npm install

# Start the development server

npm start


---
````markdown
## 📂 Project Structure
```bash
todo-app/
│
├── public/ # Public assets
├── src/
│ ├── components/
│ │ └── EmptyState.jsx # This is to handle if content is empty
│ │ └── TodoForm.jsx # To accept Input details
│ | └── TodoItem.jsx # Single todo item component
│ │ └── TodoList.jsx # List of all todo items
| |
│ ├── App.jsx # Main app container
│ ├── App.css # Global styles
│ └── main.jsx # React entry point
│
├── package.json # Project metadata & dependencies
└── README.md # Documentation
````
