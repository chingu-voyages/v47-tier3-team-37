import { useState } from 'react';
import style from './CreateNote.module.css'

const CreateNote = () => {

    const [note, setNote] = useState(
        {
            title: '',
            content: '',
            summary: ''
        }
    )
    // need to create function to handle submit and updates on this page (maybe add some sort of flag to show whether its a update or new note)

    return (
        <div className={style.container}>
            <div className={style.fullNote}>
                <div className={style.topSection}>
                    <div className={style.nameDate}>
                        <div>
                            Name: <input type="text" value=""></input>
                        </div>
                        <div> Date: </div>
                    </div>
                    <p>Essential Question: <input type="text" value={note.title}></input> </p>
                </div>
                <div className={style.middleSection}>
                    <div className={style.questions}>
                        <textarea
                            name="question"
                            id="question"
                            cols="30"
                            rows="10"
                            placeholder='write questions here...'
                            required
                        >
                        </textarea>
                    </div>
                    <div className={style.noteBody}>
                        <textarea
                            name="content"
                            id="content"
                            cols="30"
                            rows="10"
                            placeholder='write notes here...'
                            value={note.content}
                            required
                        >
                        </textarea>
                    </div>
                </div>
                <div className={style.summary}>
                    <p>Summary: </p>
                    <textarea
                        type="text"
                        cols="30"
                        rows="10"
                        value={note.summary}
                        required
                    >
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default CreateNote;