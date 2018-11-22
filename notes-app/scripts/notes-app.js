'use strict'

//Intialize notes
let notes = getSavedNotes();

//Initalize Filters
const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

//First screen render
renderNotes(notes,filters);

//Event listener for creating a note.
document.querySelector('#create-note-button').addEventListener('click' , (e) => {
  const timeStamp = moment().valueOf();
  const newID = uuidv4();
  notes.push({
    id: newID,
    title: '',
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp
  });
  saveNotes(notes);
  // renderNotes(notes, filters);
  location.assign(`/edit.html#${newID}`);
});

//Event listener for search box.
document.querySelector('#text-search').addEventListener('input' , (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes , filters);
});

//Event listener for dropdown selection. 
document.querySelector('#filter-by').addEventListener('change' , (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes,filters);
});

window.addEventListener('storage' ,(e) => {
  if (e.key === 'notes'){
     notes = JSON.parse(e.newValue);
     renderNotes(notes , filters);
  }
});