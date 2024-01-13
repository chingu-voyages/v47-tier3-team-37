export function NotesList({ noteListData }) {
  return (
    <div className="notesList">
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
