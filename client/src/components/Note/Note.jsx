import style from "./Note.module.css";

export function Note({ noteData }) {
  return (
    <div className={style.fullNote}>
      <div className={style.topSection}>
        <div className={style.nameDate}>
          <div>
            Name: <input type="text" value="Krishan Leong"></input>
          </div>
          <div> Date: {noteData.date}</div>
        </div>
        <p>Essential Question: {noteData.essentialQuestion}</p>
      </div>
      <div className={style.middleSection}>
        <div className={style.questions}>
          <ul>
            {noteData.questions.map((question, index) => {
              return <li key={index}>{question}</li>;
            })}
          </ul>
        </div>
        <div className={style.noteBody}>
          <p>{noteData.noteBody}</p>
        </div>
      </div>
      <div className={style.summary}>
        <p>Summary: {noteData.summary}</p>
      </div>
    </div>
  );
}
