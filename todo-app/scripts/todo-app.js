'use strict'

//Get stored todos.
const todos = getSavedTodos();

//Stores active filters.
const filters = {
  searchText:'',
  hideCompleted: false
}

//First page render.
renderTodos(todos , filters);

//Search box event listener.
document.querySelector('#search-text').addEventListener('input' , (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//Handels adding a new todo.
document.querySelector('#newTodo').addEventListener('submit' , (e) => {
  e.preventDefault();
  
  //Generate new todo:
  let todoText = e.target.elements.todoToAdd.value.trim();
  if (todoText !== ''){
    let newTodo = {
      id: uuidv4(),
      text: todoText,
      completed: false
    }
  
    todos.push(newTodo);
  
    const todosString = JSON.stringify(todos);
  
    saveTodos(todosString);
  
    renderTodos(todos , filters);
  
    e.target.elements.todoToAdd.value = '';
  }
  

});

document.querySelector('#hide-completed').addEventListener('change' , (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos , filters);
});


