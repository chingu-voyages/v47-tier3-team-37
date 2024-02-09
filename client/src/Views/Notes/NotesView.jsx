import { useState } from "react";
import { useEffect } from "react";
import { noteDataFromFile } from "../../assets/noteData";
import { NotesList } from "../../components/NotesList/NotesList";
import { Note } from "../../components/Note/Note";
import style from "./NotesView.module.css";
import CreateNote from "./CreateNote";

function NotesView() {
  const [count, setCount] = useState(0);
  const [noteData, setNoteData] = useState(noteDataFromFile);
  const [activeNote, setActiveNote] = useState(noteData[0]);
  const [loading, setLoading] = useState(false);
  const [createNote, setCreateNote] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("replacewithourendpoint", {
  //     method: "GET",
  //     headers: {
  //       "": "",
  //     },
  //   }).then((res) => {
  //     setNoteData(res.data);
  //     setLoading(false);
  //   });
  // }, []);

  function handleCreateNewNote() {
    setCreateNote(true);
  }

  function handleNoteSelection(noteId) {
    console.log("Note ID", noteId);
    setActiveNote(
      noteData.find((note) => {
        return note.id === noteId;
      })
    );
    setCreateNote(false);
  }

  return (
    <>
      <h1>Online Cornell Notes App</h1>

      <div className={style.container}>
        <NotesList
          noteData={noteData}
          handleCreateNewNote={handleCreateNewNote}
          handleNoteSelection={handleNoteSelection}
        />
        {createNote ? <CreateNote /> : <Note noteData={activeNote} />}
      </div>
    </>
  );
}

export default NotesView;
