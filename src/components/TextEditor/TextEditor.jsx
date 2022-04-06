import "./TextEditor.css"
import { ColorPalette, AddLabel, Priority } from "../index"
export const TextEditor = ({ toggleTextEditor }) => {
    return <section className={toggleTextEditor}>
        <input className="text-editor-title" type="text" placeholder="Title" />
        <div className="toolbar flex-row">
            <button className="btn-toolbar"><span class="material-icons-round app-icon">
                format_bold
            </span></button>
            <button className="btn-toolbar"><span class="material-icons-round app-icon">
                format_italic
            </span></button>
            <button className="btn-toolbar"><span class="material-icons-round app-icon">
                format_underlined
            </span></button>
            <button className="btn-toolbar"><span class="material-icons-round app-icon">
                strikethrough_s
            </span>
            </button>
        </div>
        <textarea className="text-editor-textarea" placeholder="Take a note..."></textarea>
        <div className="flex-row justify-space-between">
            <div className="text-editor-actions flex-row">
                <ColorPalette />
                <AddLabel />
                <Priority />
            </div>
            <button className="btn-add-note">Add</button>
        </div>

    </section>
}