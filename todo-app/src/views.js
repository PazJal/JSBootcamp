import {getTodos , saveTodos , toggleTodo , removeTodo} from './todos';
import {getFilters} from './filters'

// renderTodos
// Arguments: none
// Return value: none
const renderTodos = () => {

  const todos = getTodos();
  const {searchText , hideCompleted} = getFilters();

  const filteredTodos = todos.filter((todo) => {
    let textCondition = todo.text.toLowerCase().includes(searchText.toLowerCase());
    let showCompletedCondition = !(todo.completed && hideCompleted);
    
    return (textCondition && showCompletedCondition);
  });

  const todosToComplete = filteredTodos.filter((todo) => !todo.completed).length;

  document.querySelector('#todos').innerHTML = '';
  
  document.querySelector('#todos').appendChild(generateSummaryDOM(todosToComplete));
  
  if (filteredTodos.length === 0){
    const emptyMsg = document.createElement('p');
    emptyMsg.classList.add('empty-message');
    emptyMsg.textContent = 'No soup for you!';
    document.querySelector('#todos').appendChild(emptyMsg);
  } else {
    filteredTodos.forEach((todo) => {
      document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
  }
}

// generateTodoDOM
// Arguments: todo
// Return value: the todo element
const generateTodoDOM = (todo) => {
  //Setup Div
  const todoDiv = document.createElement('label');
  const containerEl = document.createElement('div');

  //Setup checkbox element 
  const todoCheckbox = document.createElement('input');
  todoCheckbox.setAttribute('type' , 'checkbox');
  todoCheckbox.checked = todo.completed;
  todoCheckbox.addEventListener('change' , (e) => {
    //toggle todo
    toggleTodo(todo.id);
    //save todo
    saveTodos();
    //render changes
    renderTodos();
  });

  //Setup span element
  const todoSpan = document.createElement('span');
  todoSpan.textContent = todo.text;

  todoDiv.classList.add('list-item');
  containerEl.classList.add('list-item__container');
  todoDiv.appendChild(containerEl);

  //Setup button element
  const todoButton = document.createElement('button');
  todoButton.classList.add('button' , 'button--text');
  todoButton.textContent = 'remove';
  todoButton.addEventListener('click' , () => {
    //Remove todo
    removeTodo(todo.id);
    //Save todos
    saveTodos();
    //render after changes
    renderTodos();
  });

  containerEl.appendChild(todoCheckbox);
  containerEl.appendChild(todoSpan);
  todoDiv.appendChild(todoButton);

  return todoDiv;
}

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const generateSummaryDOM = (todosToComplete) => {
  const firstParagraph = document.createElement('h2');
  firstParagraph.classList.add('list-title');
  firstParagraph.textContent = todosToComplete === 1 ? `You have ${todosToComplete} todo left.` : `You have ${todosToComplete} todos left.` ;
  return firstParagraph;
}

// Make sure to set up the exports
export {generateSummaryDOM , generateTodoDOM , renderTodos};