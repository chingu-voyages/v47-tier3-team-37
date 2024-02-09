import style from "./NotesList.module.css";

export function NotesList({
  noteData,
  handleCreateNewNote,
  handleNoteSelection,
}) {
  console.log(noteData);
  return (
    <div className={style.notesList}>
      <ul>
        <li className={style.noteElement} onClick={handleCreateNewNote}>
          Create a New Note
        </li>
        {noteData.map((note) => {
          return (
            <li
              key={note.id}
              className={style.noteElement}
              onClick={() => handleNoteSelection(note.id)}
            >
              {note.date} - {note.noteTitle}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
