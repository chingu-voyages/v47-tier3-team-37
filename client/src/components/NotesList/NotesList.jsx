import style from "./NotesList.module.css";

export function NotesList({ noteListData }) {
  return (
    <div className={style.notesList}>
      <ul>
        {noteListData.map((note, index) => {
          return (
            <li key={index}>
              {note.date} - {note.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
