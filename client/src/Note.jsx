export function Note({ noteData }) {
  return (
    <div className="fullNote">
      <div className="topSection">
        <div className="nameDate">
          <div>
            Name: <input type="text" value="Krishan Leong"></input>
          </div>
          <div> Date: {noteData.date}</div>
        </div>
        <p>Essential Question: {noteData.essentialQuestion}</p>
      </div>
      <div className="middleSection">
        <div className="questions">
          <ul>
            {noteData.questions.map((question, index) => {
              return <li key={index}>{question}</li>;
            })}
          </ul>
        </div>
        <div className="noteBody">
          <p>{noteData.noteBody}</p>
        </div>
      </div>
      <div className="summary">
        <p>Summary: {noteData.summary}</p>
      </div>
    </div>
  );
}
