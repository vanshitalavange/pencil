import "./Notes.css"
import { Sidebar, TextEditor } from "../../components"
import { useState } from "react"
import { useNote } from "../../contexts"
import { NoteCard } from "../../components"
export const Notes = () => {
    const { notes, showTextEditor, setShowTextEditor } = useNote()
    return <main className="page-main flex-row">
        <Sidebar />
        <section className="notes-section flex-column">
            <div onClick={() => setShowTextEditor(true)} className="new-note  flex-row">
                <span className="material-icons-round add-icon align-center app-icon">
                    add_circle_outline
                </span>
                <div className="new-note-text">
                    <div>Take a note..</div>
                </div>
            </div>
            {showTextEditor && <TextEditor />}
            <div className="flex-row notes-display-section flex-wrap">{
                notes.map(note => {
                    return <NoteCard note={note} />
                })
            }</div>
        </section>

    </main>
}