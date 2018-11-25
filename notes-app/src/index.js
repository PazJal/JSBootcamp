import {createNote} from './notes';
import {setFilters} from './filters';
import {renderNotes} from './view.js'
//First screen render
renderNotes();

//Event listener for creating a note.
document.querySelector('#create-note-button').addEventListener('click' , (e) => {
  
  const id = createNote();
  location.assign(`/edit.html#${id}`);
});

//Event listener for search box.
document.querySelector('#text-search').addEventListener('input' , (e) => {
  setFilters({
    searchText: e.target.value
  });
  renderNotes();
});

//Event listener for dropdown selection. 
document.querySelector('#filter-by').addEventListener('change' , (e) => {
  setFilters({
    sortBy: e.target.value
  });
  renderNotes();
});

window.addEventListener('storage' ,(e) => {
  if (e.key === 'notes'){
     renderNotes();
  }
});