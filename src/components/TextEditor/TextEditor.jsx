import "./TextEditor.css"
import { useState, useEffect } from "react"
import { getFormInput } from "../../utils/getFormInput"
import { ColorPalette, AddLabel, Priority } from "../index"
import { useNote } from "../../contexts"
export const TextEditor = ({ setShowTextEditor }) => {
    const { addNoteHandler } = useNote()
    const [noteData, setNoteData] = useState({
        title: "",
        noteText: "",
        tags: [],
        priority: "",
        date: new Date().toLocaleDateString()
    })
    const { tags } = noteData;
    return <section className="text-editor flex-column">
        <div className="flex-row justify-space-between">
            <input onChange={(event) => getFormInput(event, setNoteData)} className="text-editor-title" name="title" type="text" placeholder="Title" required />
            <button onClick={() => setShowTextEditor(false)}><span className="material-icons-round app-icon">
                close
            </span></button>
        </div>
        <div className="tags flex-row flex-wrap">
            {
                tags.length !== 0 && tags.map(tag => {
                    return <div className="tag flex-row">
                        <span>{tag}</span>
                        <span onClick={() => {
                            const updatedTags = tags.filter(tagItem => tagItem !== tag)
                            setNoteData({ ...noteData, tags: updatedTags })
                        }} className="material-icons-round app-icon close-tag align-center">
                            close
                        </span>
                    </div>
                })
            }
        </div>
        <div className="toolbar flex-row">
            <button className="btn-toolbar"><span className="material-icons-round app-icon">
                format_bold
            </span></button>
            <button className="btn-toolbar"><span className="material-icons-round app-icon">
                format_italic
            </span></button>
            <button className="btn-toolbar"><span className="material-icons-round app-icon">
                format_underlined
            </span></button>
            <button className="btn-toolbar"><span className="material-icons-round app-icon">
                strikethrough_s
            </span>
            </button>
        </div>
        <textarea onChange={(event) => { getFormInput(event, setNoteData) }} className="text-editor-textarea" name="noteText" placeholder="Take a note..." required></textarea>
        <div className="flex-row justify-space-between">
            <div className="text-editor-actions flex-row">
                <ColorPalette />
                <AddLabel noteData={noteData} setNoteData={setNoteData} />
                <Priority noteData={noteData} setNoteData={setNoteData} />
            </div>
            <button type="submit" onClick={() => addNoteHandler(noteData, setShowTextEditor)} className="btn-add-note">Add</button>
        </div>

    </section>
}