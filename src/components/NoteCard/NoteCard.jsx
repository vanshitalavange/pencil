import "./NoteCard.css"
import { useNote, useAuth } from "../../contexts"
import { archiveNote, restoreArchivedNote, deleteArchivedNote, deleteNote, addNote } from "../../services"
export const NoteCard = ({ note }) => {

    const { userState: { authToken } } = useAuth()
    const { setNoteData, setShowTextEditor, notesState, dispatchNotes } = useNote()
    const { notes, archives, deletedNotes } = notesState
    const { title, priority, tags, noteText, date, _id, color } = { ...note }
    const archiveNoteHandler = () => {
        archiveNote(authToken, _id, note, dispatchNotes)
    }
    return <div style={color && { backgroundColor: color, border: `1px solid ${color}` }} className="note-card flex-column">
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
        {
            !archives.includes(note) && !deletedNotes.includes(note) ? <div className="text-editor-actions flex-row">
                <button onClick={() => {
                    const noteToEdit = notes.find(note => note._id === _id)
                    setNoteData(({ ...noteToEdit, edit: true }))
                    setShowTextEditor(true)
                }}>
                    <span class="material-icons-outlined app-icon">
                        edit
                    </span>
                </button>
                <button onClick={() => {
                    archiveNoteHandler()
                }}><span class="material-icons-outlined app-icon">
                        archive
                    </span></button>
                <button onClick={() => {
                    deleteNote(authToken, _id, dispatchNotes, note, notes)
                }}><span class="material-icons-outlined app-icon">
                        delete
                    </span></button>
            </div> : deletedNotes.includes(note) ? <div className="text-editor-actions flex-row">
                <button onClick={() => {
                    dispatchNotes({ type: "DELETE_FROM_TRASH", payload: note })
                    addNote(authToken, note, dispatchNotes)
                }}><span class="material-icons-outlined app-icon">
                        restore_from_trash
                    </span></button>
                <button onClick={() => {
                    dispatchNotes({ type: "DELETE_FROM_TRASH", payload: note })
                }}><span class="material-icons-outlined app-icon">
                        delete
                    </span></button>
            </div> :
                <div className="text-editor-actions flex-row">
                    <button onClick={() => restoreArchivedNote(authToken, _id, dispatchNotes)}><span class="material-icons-outlined app-icon">
                        unarchive
                    </span></button>
                    <button onClick={() => deleteArchivedNote(authToken, _id, dispatchNotes)}><span class="material-icons-outlined app-icon">
                        delete
                    </span></button>
                </div>
        }
    </div>
}