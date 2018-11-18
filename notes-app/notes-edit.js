'use strict'

const noteID = location.hash.substring(1);

let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteID);

if (!note){
  location.assign('/index.html');
}

//Setup the title text box
const noteTitleText = document.querySelector('#note-title');
noteTitleText.value = note.title;
noteTitleText.addEventListener('input' , () => {
  //update the note title:
  note.title = noteTitleText.value;
  //Update the timestamp for edited:
  note.updatedAt = moment().valueOf();
  noteLastEdited.innerText = generateLastEdited(note.updatedAt);
  //save the changes:
  saveNotes(notes);
});

//Setup the last edited span element
const noteLastEdited = document.querySelector('#last-edited');
noteLastEdited.innerText = generateLastEdited(note.updatedAt);

//Setup the note body text box
const noteBodyText = document.querySelector('#note-body')
noteBodyText.value = note.body;
noteBodyText.addEventListener('input' , () => {
  //update the note body:
  note.body = noteBodyText.value;
  //Update the timestamp for edited:
  note.updatedAt = moment().valueOf();
  noteLastEdited.innerText = generateLastEdited(note.updatedAt);
  //save the changes:
  saveNotes(notes);
});

//Setup the delete button:
const deleteButton = document.querySelector('#remove-note');
deleteButton.addEventListener('click' , () => {
  //remove the note:
  removeNote(note.id);
  //save Changes:
  saveNotes(notes);
  //redirect:
  location.assign('/index.html');
});


window.addEventListener('storage' , (e) => {
  if (e.key === 'notes'){
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id === noteID);
    
    if (!note){
      location.assign('/index.html');
    }
    noteTitleText.value = note.title;
    noteBodyText.value = note.body;
    noteLastEdited.innerText = generateLastEdited(note.updatedAt);
  }
});