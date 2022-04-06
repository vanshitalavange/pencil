import "./Notes.css"
import { Sidebar, TextEditor } from "../../components"
import { useState } from "react"
export const Notes = () => {
    const [textEditorClass, setTextEditorClass] = useState("display-none")
    const toggleTextEditorClass = () => {
        setTextEditorClass(className => className === "display-none" ? setTextEditorClass("text-editor flex-column") : setTextEditorClass("display-none"))
    }
    return <main className="page-main flex-row">
        <Sidebar />
        <section className="notes-section flex-column">
            <div onClick={() => toggleTextEditorClass()} className="new-note  flex-row">
                <span class="material-icons-round add-icon align-center app-icon">
                    add_circle_outline
                </span>
                <div className="new-note-text">
                    <div>Take a note..</div>
                </div>
            </div>
            <TextEditor toggleTextEditor={textEditorClass} />
        </section>

    </main>
}