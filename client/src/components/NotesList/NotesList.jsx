import style from "./NotesList.module.css";

export function NotesList({
  noteListData,
  handleCreateNewNote,
  handleNoteSelection,
}) {
  console.log(noteListData);
  return (
    <div className={style.notesList}>
      <ul>
        <li className={style.noteElement} onClick={handleCreateNewNote}>
          Create a New Note
        </li>
        {noteListData.map((note) => {
          return (
            <li
              key={note.id}
              className={style.noteElement}
              onClick={() => handleNoteSelection(note.id)}
            >
              {note.date} - {note.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
