import "./Priority.css"
import { getFormInput } from "../../utils/getFormInput"
import { useNote } from "../../contexts"
import { useEffect } from "react"
export const Priority = ({ activeElement, setActiveElement }) => {
    const { noteData, setNoteData } = useNote()
    useEffect(() => {
        if (noteData.priority === "") {
            setNoteData(noteData => ({ ...noteData, priority: "low" }))
        }
    }, [])
    return <div className="note-priority">
        <button onClick={() => {
            setActiveElement(active => ({ showPaletteDropDown: false, showAddLabelDropDown: false, showPriorityDropDown: !active.showPriorityDropDown }))
        }
        } className="btn-priority">{
                noteData.priority
            }</button>
        {activeElement.showPriorityDropDown && <ul className="priority-list">
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "priority", "high")
                setActiveElement(active => ({ ...active, showPriorityDropDown: !active.showPriorityDropDown }))
            }
            } className="priority-list-item">High</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "priority", "medium")
                setActiveElement(active => ({ ...active, showPriorityDropDown: !active.showPriorityDropDown }))
            }
            } className="priority-list-item">Medium</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "priority", "low")
                setActiveElement(active => ({ ...active, showPriorityDropDown: !active.showPriorityDropDown }))
            }
            } className="priority-list-item">low</li>
        </ul >}
    </div >
}