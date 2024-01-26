import { useState } from "react";
import { noteData } from "../../assets/noteData";
import { noteListData } from "../../assets/noteListData";
import { NotesList } from "../../components/NotesList/NotesList";
import { Note } from "../../components/Note/Note";
import style from "./NotesView.module.css";

function NotesView() {
  const [count, setCount] = useState(0);
  const [activeNote, setActiveNote] = useState(noteData[0]);

  function handleCreateNewNote() {}

  function handleNoteSelection(noteId) {
    console.log("Nte ID", noteId);
    setActiveNote(
      noteData.find((note) => {
        return note.id === noteId;
      })
    );
  }

  return (
    <>
      <h1>Online Cornell Notes App</h1>

      <div className={style.container}>
        <NotesList
          noteListData={noteListData}
          handleCreateNewNote={handleCreateNewNote}
          handleNoteSelection={handleNoteSelection}
        />
        <Note noteData={activeNote} />
      </div>
    </>
  );
}

export default NotesView;
