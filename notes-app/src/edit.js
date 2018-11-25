import {initializeEditPage , generateLastEdited} from './view'
import {updateNote , removeNote} from './notes'

const noteTitleText = document.querySelector('#note-title');
const noteLastEdited = document.querySelector('#last-edited');
const noteBodyText = document.querySelector('#note-body');
const deleteButton = document.querySelector('#remove-note');

const noteID = location.hash.substring(1);

initializeEditPage(noteID);

//Setup the title text box


noteTitleText.addEventListener('input' , (e) => {
  const note = updateNote(noteID , {
    title: e.target.value
  })
  noteLastEdited.innerText = generateLastEdited(note.updatedAt);
});

noteBodyText.addEventListener('input' , (e) => {
  const note = updateNote(noteID , {
    body: e.target.value
  });
  noteLastEdited.innerText = generateLastEdited(note.updatedAt);
});

//Setup the delete button:

deleteButton.addEventListener('click' , () => {
  //remove the note:
  removeNote(noteID);
  location.assign('/index.html');
});


window.addEventListener('storage' , (e) => {
  if (e.key === 'notes'){
    initializeEditPage(noteID);
  }
});