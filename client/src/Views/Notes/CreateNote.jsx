import { useState } from "react";
import style from "./CreateNote.module.css";
import Note from "../../Note";
import Question from "../../Question";

const CreateNote = () => {
  const [note, setNote] = useState(new Note());
  const [question, setQuestion] = useState(new Question());

  const submitNote = (note) => {
    console.log(note);
    console.log(question);
  };

  // need to create function to handle submit and updates on this page (maybe add some sort of flag to show whether its a update or new note)

  return (
    <div className={style.container}>
      <div className={style.fullNote}>
        <div className={style.topSection}>
          <div className={style.nameDate}>
            <div>Name: {note.user}</div>
            <div> Date: </div>
          </div>
          <div className={style.nameDate}>
            <div>
              Essential Question:
              <input
                type="text"
                value={note.title}
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                required
              />
            </div>
            <div>
              {" "}
              Class:
              <input
                type="text"
                value={note.className}
                onChange={(e) =>
                  setNote({ ...note, className: e.target.value })
                }
                required
              />
            </div>
          </div>
        </div>
        <div className={style.middleSection}>
          <div className={style.questions}>
            <textarea
              name="question"
              id="question"
              cols="30"
              rows="10"
              placeholder="write questions here..."
              value={question.content}
              onChange={(e) =>
                setQuestion({ ...question, content: e.target.value })
              }
              required
            ></textarea>
          </div>
          <div className={style.noteBody}>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="write notes here..."
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
              required
            ></textarea>
          </div>
        </div>
        <div className={style.summary}>
          <p>Summary: </p>
          <textarea
            type="text"
            cols="30"
            rows="10"
            value={note.summary}
            onChange={(e) => setNote({ ...note, summary: e.target.value })}
            required
          ></textarea>
        </div>
        <div className={style.button}>
          <button onClick={(e) => submitNote(note)}>Add Note</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
