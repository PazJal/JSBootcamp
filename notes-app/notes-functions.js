'use strict'
//Read Existing notes from local storage. 
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  try{
    return notesJSON ? JSON.parse(notesJSON) : [];
  }catch(e){
    return [];
  }
}

//Save the notes to local storage.
const saveNotes = (notes) => {
  localStorage.setItem('notes' , JSON.stringify(notes));
}

//Remove a note from the list.
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id); 

  if(noteIndex > -1){
    notes.splice(noteIndex,1);
  }
};


//Generate the dom structre for a note. 
const generateNoteDom = (note) => {

  //Elemenet creation
  const noteElement = document.createElement('div');

  const textElement = document.createElement('a');
  textElement.setAttribute('href' , `/edit.html#${note.id}`);
  const button = document.createElement('button');
  //Setup the remove note button.
  button.textContent = 'x';

  //Hook up the delete event.
  button.addEventListener('click' , () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes,filters);

  });
  noteElement.appendChild(button);
  //Setup the note title text
  if(note.title.length >  0){
    textElement.textContent = note.title;  
  } else {
    textElement.textContent = 'Unnamed note';
  }

  noteElement.appendChild(textElement);

  return noteElement;    
}

//Render application notes
const renderNotes = (notes , filters) => {
  notes = sortNotes(notes, filters.sortBy);

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()));

  document.querySelector('#notes').innerHTML = '';
  filteredNotes.forEach((note) => {
    const noteElement = generateNoteDom(note);
    document.querySelector('#notes').appendChild(noteElement);
  });
}

//Generate the last edited message:
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`;
};

//Sorts the notes by one of three options
const sortNotes = (notes , sortBy) => {
  if (sortBy === 'byEdited'){
    return notes.sort((a ,b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt){
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a ,b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt){
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'alphabetical') {
      return notes.sort((a ,b ) => {
        if ( a.title.toLowerCase() < b.title.toLowerCase()){
          return -1;
        } else if (a.title.toLowerCase() > b.title.toLowerCase()){
          return 1;
        } else {
          return 0;
        }
      });
  } else {
    return notes;
  }

}