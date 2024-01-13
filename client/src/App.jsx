import { useState } from "react";
import { noteData } from "./noteData";
import { noteListData } from "./noteListData";
import { NotesList } from "./NotesList";
import { Note } from "./Note";

function App() {
  const [count, setCount] = useState(0);
  const [activeNote, setActiveNote] = useState(noteData[0]);

  return (
    <>
      <h1>Online Cornell Notes App</h1>

      <div className="container">
        <NotesList noteListData={noteListData} />
        <Note noteData={noteData[0]} />
      </div>
    </>
  );
}

export default App;
