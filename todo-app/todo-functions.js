'use strict'

//Reads data from local storage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  try{
    return todosJSON ? JSON.parse(todosJSON) : [];
  }catch (e){
    return [];
  }
}

//Save todos encapsulation
const saveTodos = (todosString) => {
  localStorage.setItem('todos' , todosString);
}

//Remove a todo by its UID
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if(todoIndex > -1) {
    todos.splice(todoIndex , 1);
  }
}

//Toggles the completed status of a todo by its ID
const toggleTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos[todoIndex].completed = !todos[todoIndex].completed;
  }
};

//Generate a DOM element for a single todo
const generateTodoDOM = (todo) => {
  //Setup Div
  const todoDiv = document.createElement('div');

  //Setup checkbox element 
  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type' , 'checkbox');
  todoCheckbox.checked = todo.completed;
  todoCheckbox.addEventListener('change' , (e) => {
    //toggle todo
    toggleTodo(todo.id);
    //save todo
    saveTodos(JSON.stringify(todos));
    //render changes
    renderTodos(todos,filters);
  });

  //Setup span element
  const todoSpan = document.createElement('span');
  todoSpan.textContent = todo.text;

  //Setup button element
  const todoButton = document.createElement('button');
  todoButton.textContent = 'x';
  todoButton.addEventListener('click' , () => {
    //Remove todo
    removeTodo(todo.id);
    //Save todos
    saveTodos(JSON.stringify(todos));
    //render after changes
    renderTodos(todos , filters);
  });

  todoDiv.appendChild(todoCheckbox);
  todoDiv.appendChild(todoSpan);
  todoDiv.appendChild(todoButton);

  // const todoParagraph = document.createElement('p');
  // todoParagraph.textContent = todo.text;
  return todoDiv;
}

const generateSummaryDOM = (todosToComplete) => {
  const firstParagraph = document.createElement('h2');
  firstParagraph.textContent = `You have ${todosToComplete} todos left.`;
  return firstParagraph;
}

//Render Application todos based on filters. 
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    let textCondition = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    let showCompletedCondition = !(todo.completed && filters.hideCompleted);
    
    return (textCondition && showCompletedCondition);
  });

  const todosToComplete = filteredTodos.filter((todo) => !todo.completed).length;

  document.querySelector('#todos').innerHTML = '';
  
  document.querySelector('#todos').appendChild(generateSummaryDOM(todosToComplete));
 
  filteredTodos.forEach((todo) => {
    
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });


}
