import "./TextEditor.css"
import { useState, useEffect } from "react"
import { getFormInput } from "../../utils/getFormInput"
import { ColorPalette, AddLabel, Priority } from "../index"
import { useNote, useAuth } from "../../contexts"
import { addNote, editNote } from "../../services"
export const TextEditor = () => {
    const { userState: { authToken } } = useAuth()
    const { setShowTextEditor, noteData, setNoteData, dispatchNotes, defaultNoteData } = useNote()
    const { title, tags, noteText, _id, color } = noteData;
    const [activeAction, setActiveAction] = useState({
        showPaletteDropDown: false,
        showAddLabelDropDown: false,
        showPriorityDropDown: false
    })

    return <section style={color && { backgroundColor: color }} className="text-editor flex-column">
        <div className="flex-row justify-space-between">
            <input onChange={(event) => getFormInput(event, setNoteData)} value={title} className="text-editor-title" name="title" type="text" placeholder="Title" />
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
        <textarea onChange={(event) => { getFormInput(event, setNoteData); setNoteData(noteData => ({ ...noteData, date: new Date().toLocaleString() })) }} value={noteText} className="text-editor-textarea" name="noteText" placeholder="Take a note..."></textarea>
        <div className="flex-row justify-space-between">
            <div className="text-editor-actions flex-row">
                <ColorPalette activeElement={activeAction} setActiveElement={setActiveAction} />
                <AddLabel activeElement={activeAction} setActiveElement={setActiveAction} />
                <Priority activeElement={activeAction} setActiveElement={setActiveAction} />
            </div>
            <button onClick={() => {
                if (noteData.edit) {
                    editNote(authToken, _id, noteData, dispatchNotes)
                } else {
                    addNote(authToken, noteData, dispatchNotes)
                }
                setNoteData(defaultNoteData)
                setShowTextEditor(false)

            }} className="btn-add-note">{noteData.edit ? "Save" : "Add"}</button>
        </div>

    </section >
}