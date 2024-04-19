import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
const App = () => {

  const[notes,setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note!",
      date: "16/04/2024"
    },
    
    
]);

  const addnote = (text) =>{
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes,newNote];
      setNotes(newNotes);
  };

  const deleteNote=(id)=>{
      const newNotes=notes.filter((note)=>note.id!==id);
      setNotes(newNotes);
  }

  return <div className="container">
    <Header/>
    <Search/>
    <NotesList notes={notes} handleAddNote={addnote} handleDeleteNote = {deleteNote}/>
  </div>
}

export default App;