const todo = {
  id: '1231241',
  text: 'Pay the bills',
  completed: false
};

const printTodo = ({ text , completed}) => {
  console.log(`${text} , ${completed}`);
}
printTodo(todo);

const {text:todoText , completed , details = 'default' , ...others} = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

const age = [65 , 0 , 21];
const [firstAge ,...otherAges] = age;
console.log(firstAge);
// console.log(secondAge);
// console.log(lastAge);
console.log(otherAges);