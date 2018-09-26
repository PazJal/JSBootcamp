const todos = [{
  text: 'Todo 1',
  completed: true
} ,{
  text: 'Laundry',
  completed: true
} ,{
  text: 'Pay Bills',
  completed: false
} , {
  text: 'Homework',
  completed: false
} , {
  text: 'Last Todo',
  completed: false
}];

// const ps = document.querySelectorAll('p');
// const filteredPs = ps.forEach((p) => {
//   if(p.textContent.toLowerCase().includes('the')){
//     p.remove();
//   }
// });;

const filters = {
  searchText:'',
  hideCompleted: false
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter((todo) => {
    let textCondition = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    let showCompletedCondition = !(todo.completed && filters.hideCompleted)
    return (textCondition && showCompletedCondition);
  });
  const todosToComplete = filteredTodos.filter((todo) => {
    return !todo.completed;
  }).length;
  document.querySelector('#todos').innerHTML = '';
  const firstParagraph = document.createElement('h2');
  firstParagraph.textContent = `You have ${todosToComplete} todos left.`;
  document.querySelector('#todos').appendChild(firstParagraph);

 
  filteredTodos.forEach((todo) => {
    const todoParagraph = document.createElement('p');
    todoParagraph.textContent = todo.text;
    document.querySelector('#todos').appendChild(todoParagraph);
  });


}

renderTodos(todos , filters);

document.querySelector('#search-text').addEventListener('input' , (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#newTodo').addEventListener('submit' , (e) => {
  e.preventDefault();
  
  //Generate new todo:
  let todoText = e.target.elements.todoToAdd.value;
  let newTodo = {
    text: todoText,
    completed: false
  }

  todos.push(newTodo);

  renderTodos(todos , filters);

  e.target.elements.todoToAdd.value = '';

});

document.querySelector('#hide-completed').addEventListener('change' , (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos , filters);
});


