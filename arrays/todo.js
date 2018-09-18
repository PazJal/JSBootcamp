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

const deleteTodo = function (todos, text) {

  const index = todos.findIndex((todo , index) => {
    return todo.text.toLowerCase() === text.toLowerCase();
  });
  let removedValue = todos[index];
  if(index != -1) {
    todos.splice(index , 1);
  }
  return removedValue;
}

// console.log(deleteTodo(todos , 'pa bills'));
// console.log(todos);

const getThingsToDo = function (todos) {

  return todos.filter((todo) => {
    return !todo.completed;
  });

}


// console.log(getThingsToDo(todos));

const sortTodos = function (todos) {

  todos.sort((a , b) => {
    if((!a.completed) && (b.completed)){
      return -1;
    } else if ((a.completed) && (!b.completed)){
      return 1;
    } else {
      return 0;
    }

  });

}

sortTodos(todos);
console.log(todos);
