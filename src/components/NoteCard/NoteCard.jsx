import "./NoteCard.css"
import { ColorPalette } from "../ColorPalette/ColorPalette"
export const NoteCard = ({ note }) => {
    const { title, priority, tags, noteText, date } = { ...note }
    return <div className="note-card flex-column">
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
            <ColorPalette />
            <span class="material-icons-outlined app-icon">
                edit
            </span>
            <span class="material-icons-outlined app-icon">
                archive
            </span>
        </div>
    </div>
}