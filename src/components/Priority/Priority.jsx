import "./Priority.css"
import { useState } from "react"
import { getFormInput } from "../../utils/getFormInput"
export const Priority = ({ noteData, setNoteData }) => {
    const [priorityListClass, setPriorityListClass] = useState("display-none")
    const togglePriorityListClass = () => {
        setPriorityListClass(className => className === "display-none" ? setPriorityListClass("priority-list") : setPriorityListClass("display-none"))
    }
    return <div className="note-priority">
        <button onClick={() => togglePriorityListClass()} className="btn-priority">{noteData.priority === "" ? "Priority" : noteData.priority}</button>
        <ul className={priorityListClass}>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "priority", "high")
                setPriorityListClass("display-none")
            }
            } className="priority-list-item">High</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "priority", "medium")
                setPriorityListClass("display-none")
            }
            } className="priority-list-item">Medium</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "priority", "low")
                setPriorityListClass("display-none")
            }
            } className="priority-list-item">low</li>
        </ul >
    </div >
}