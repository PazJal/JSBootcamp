import moment from 'moment';
import {getFilters} from './filters';
import {sortNotes , getNotes} from './notes';


//Generate the dom structre for a note. 
const generateNoteDom = (note) => {

  //Elemenet creation
  const noteElement = document.createElement('a');
  const textElement = document.createElement('p');
  const statusEl = document.createElement('p');

  //Setup the note title text
  if(note.title.length >  0){
    textElement.textContent = note.title;  
  } else {
    textElement.textContent = 'Unnamed note';
  }
  textElement.classList.add('list-item__title');
  noteElement.appendChild(textElement);

  //Setup the link
  noteElement.setAttribute('href' , `/edit.html#${note.id}`);
  noteElement.classList.add('list-item');

  //Setup status message
  statusEl.textContent = generateLastEdited(note.updatedAt);
  statusEl.classList.add('list-item__subtitle');
  noteElement.appendChild(statusEl);

  return noteElement;    
}

//Render application notes
const renderNotes = () => {
  const filters = getFilters();
  const notes = sortNotes(filters.sortBy);
  const notesEl = document.querySelector('#notes');
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

  notesEl.innerHTML = '';

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteElement = generateNoteDom(note);
      notesEl.appendChild(noteElement);
    });
  } else {
    const emptyMsg = document.createElement('p');
    emptyMsg.textContent = 'No notes to show.';
    emptyMsg.classList.add('empty-message');
    notesEl.appendChild(emptyMsg);
  }
  
}

const initializeEditPage = (noteID) => {
  const noteTitleText = document.querySelector('#note-title');
  const noteLastEdited = document.querySelector('#last-edited');
  const noteBodyText = document.querySelector('#note-body'); 
  const notes = getNotes();
  const note = notes.find((note) => note.id === noteID);
  
  if (!note){
    location.assign('/index.html');
  }
  
  noteTitleText.value = note.title;
  noteBodyText.value = note.body;
  noteLastEdited.textContent = generateLastEdited(note.updatedAt);
}

//Generate the last edited message:
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};

export { generateNoteDom , renderNotes , generateLastEdited , initializeEditPage };