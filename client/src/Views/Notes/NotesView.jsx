import { useState } from "react";
import { noteData } from "../../assets/noteData";
import { noteListData } from "../../assets/noteListData";
import { NotesList } from "../../components/NotesList/NotesList";
import { Note } from "../../components/Note/Note";
import style from "./NotesView.module.css";

function NotesView() {
  const [count, setCount] = useState(0);
  const [activeNote, setActiveNote] = useState(noteData[0]);

  return (
    <>
      <h1>Online Cornell Notes App</h1>

      <div className={style.container}>
        <NotesList noteListData={noteListData} />
        <Note noteData={noteData[0]} />
      </div>
    </>
  );
}

export default NotesView;
