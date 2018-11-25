import uuidv4 from 'uuid/v4';

// Setup the empty todos array
let todos = [];

// loadTodos
// Arguments: none
// Return value: none
const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try{
    todos =  todosJSON ? JSON.parse(todosJSON) : [];
  }catch (e){
    todos = [];
  }
};

// saveTodos
// Arguments: none
// Return value: none
const saveTodos = () => {
  const todosString = JSON.stringify(todos);
  localStorage.setItem('todos' , todosString);
}

// getTodos
// Arguments: none
// Return value: todos array
const getTodos = () => {
  return todos;
}

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (todoText) => {
  if (todoText !== ''){
    let newTodo = {
      id: uuidv4(),
      text: todoText,
      completed: false
    }
    todos.push(newTodo);
    saveTodos();

  }
}

// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if(todoIndex > -1) {
    todos.splice(todoIndex , 1);
  }
  saveTodos();
}
// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
  }
  saveTodos();
};

// Make sure to call loadTodos and setup the exports
loadTodos();

export {loadTodos , saveTodos , createTodo ,removeTodo , toggleTodo , getTodos};