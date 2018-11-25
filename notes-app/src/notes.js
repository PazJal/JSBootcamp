import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { isRegExp } from 'util';

let notes = [];

//Read Existing notes from local storage. 
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes');
  try{
    return notesJSON ? JSON.parse(notesJSON) : [];
  }catch(e){
    return [];
  }
}

//Expose from module.
const getNotes = () => notes;

const createNote = () => {
  const timeStamp = moment().valueOf();
  const newID = uuidv4();
  notes.push({
    id: newID,
    title: '',
    body: '',
    createdAt: timeStamp,
    updatedAt: timeStamp
  });
  saveNotes();
  return newID;
}

//Save the notes to local storage.
const saveNotes = () => {
  localStorage.setItem('notes' , JSON.stringify(notes));
}

//Remove a note from the list.
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id); 

  if(noteIndex > -1){
    notes.splice(noteIndex,1);
    saveNotes();
  }
};

//Sorts the notes by one of three options
const sortNotes = (sortBy) => {
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

const updateNote = (id , updates) => {
  const note = notes.find((note) => note.id === id);
  if(!note) {
    return undefined;
  }
  if (typeof updates.title === 'string') {
    note.title = updates.title;
    note.updatedAt = moment().valueOf();
  }
  if (typeof updates.body === 'string') {
    note.body = updates.body;
    note.updatedAt = moment().valueOf();
  }

  saveNotes();
  return note;
}


notes = loadNotes();

export {getNotes , createNote , removeNote , sortNotes , updateNote};