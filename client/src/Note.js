class Note {
  constructor(
    idNote,
    title,
    content,
    dateCreated,
    dateModified,
    summary,
    questions = [],
    user,
    className
  ) {
    this.idNote = idNote;
    this.title = title;
    this.content = content;
    this.className = className;
    this.dateCreated = dateCreated;
    this.dateModified = dateModified;
    this.summary = summary;
    this.questions = questions;
    this.user = user;
  }
}

export default Note;
