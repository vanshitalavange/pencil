import "./NoteCard.css"
import { useNote } from "../../contexts"
export const NoteCard = ({ note }) => {
    const { setNoteData, setShowTextEditor, notes } = useNote()
    const { title, priority, tags, noteText, date, _id, color } = { ...note }
    return <div style={{backgroundColor:color === "" ? "white" : color}} className="note-card flex-column">
        <div className="flex-row justify-space-between note-card-header flex-wrap">
            <h3 class="note-title">{title === "" ? "No title" : title}</h3>
            <span class="priority">{priority === "" ? "low" : priority}</span>
        </div>
        <div className="note-content">{noteText === "" ? "Empty note" : noteText}</div>
        <div class="tags flex-row flex-wrap">{tags.map(tag => {
            return <span className="tag">{tag}</span>
        })}</div>
        <div className="flex-row date-container"><span class="material-icons-outlined">
            today
        </span>
            <span className="align-center date">created on {date}</span>
        </div>
        <div className="text-editor-actions flex-row">
            <button onClick={() => {
                const noteToEdit = notes.find(note => note._id === _id)
                setNoteData(({ ...noteToEdit, edit: true }))
                setShowTextEditor(true)
            }}><span class="material-icons-outlined app-icon">
                    edit
                </span></button>
            <button><span class="material-icons-outlined app-icon">
                archive
            </span></button>
            <button><span class="material-icons-outlined app-icon">
                delete
            </span></button>
        </div>
    </div>
}