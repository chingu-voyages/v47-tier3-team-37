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
        <div>

            <h1>Add Note</h1>

            {/* need to handle onSubmit */}
            <form>
                <div className={style.column}>
                    <label for='title'>Title</label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        value={note.title}
                        required
                    />
                </div>
                <div className={style.column}>
                    <label for='content'>Content</label>
                    <textarea
                        cols="30"
                        rows="10"
                        name='content'
                        id='content'
                        value={note.content}
                        required
                    ></textarea>
                </div>
                <div className={style.column}>
                    <label for='summary'>Summary</label>
                    <textarea
                        cols="30"
                        rows="10"
                        name='summary'
                        id='summary'
                        value={note.summary}
                        required
                    ></textarea>
                </div>

                {/* can have another button for updates (so we can update time updated) */}
                <div className={style.button}>
                    <button>Add Note</button>
                </div>
            </form>
        </div>
    );
}

export default CreateNote;