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

const todosToComplete = todos.filter((todo) => {
  return !todo.completed;
}).length;

const firstParagraph = document.createElement('h2');
firstParagraph.textContent = `You have ${todosToComplete} todos left.`;
document.querySelector('body').appendChild(firstParagraph);


todos.forEach((todo) => {
  const todoParagraph = document.createElement('p');
  todoParagraph.textContent = todo.text;
  document.querySelector('body').appendChild(todoParagraph);
});


document.querySelector('button').addEventListener('click' , () =>{
  console.log('Adding a Todo');
});
