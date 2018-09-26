const notes = [{
  title: 'my next trip',
  body: 'I would like to go to Spain'
} , {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better.'

} , {
  title: 'Office modification',
  body: 'Get a new seat'

}];
// //Query and remove. Query finds the first instance. 
// // const p =document.querySelector('p');
// // p.remove();

// const ps = document.querySelectorAll('p');
// ps.forEach((p) => {
//   p.textContent = '********';
//   // console.log(p.textContent);
//   //p.remove();
// });


// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newParagraph);


const filters = {
  searchText: ''
}

// const user = {
//   name: 'Andrew',
//   age: 27
// }
// const userJSON = JSON.stringify(user);
// console.log(userJSON);

// localStorage.setItem('user' , userJSON );

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(`${user.name} and ${user.age}`);


const renderNotes = function (notes , filters) {
  const filteredNotes = notes.filter((note) => {
    
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach((note) => {
    const noteElement = document.createElement('p');
    noteElement.textContent = note.title;
    document.querySelector('#notes').appendChild(noteElement);
  });
}

renderNotes(notes,filters);

document.querySelector('#create-note-button').addEventListener('click' , (e) => {
  e.target.textContent = 'Button was Clicked.';
});



document.querySelector('#text-search').addEventListener('input' , (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes , filters);
});

document.querySelector('#filter-by').addEventListener('change' , (e) => {
  console.log(e.target.value);
});