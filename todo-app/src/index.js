// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports

// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage

import {setFilters} from './filters';
import {createTodo , saveTodos, loadTodos } from './todos';
import {renderTodos} from './views';

//Get stored todos.
renderTodos();

//Search box event listener.
document.querySelector('#search-text').addEventListener('input' , (e) => {
  const updates = {
    searchText: e.target.value
  }
  setFilters(updates);
  renderTodos();
});

//Handels adding a new todo.
document.querySelector('#newTodo').addEventListener('submit' , (e) => {
  e.preventDefault();
  
  //Generate new todo:
  let todoText = e.target.elements.todoToAdd.value.trim();
  if (todoText !== ''){
    createTodo(todoText);
    saveTodos();
    renderTodos();
    e.target.elements.todoToAdd.value = '';
  }
});

document.querySelector('#hide-completed').addEventListener('change' , (e) => {
  const updates =  {
    hideCompleted: e.target.checked
  }
  setFilters(updates);
  renderTodos();
});

window.addEventListener('storage' , (e) => {
  if (e.key === 'todos'){
    loadTodos();
    renderTodos();
  }
})
