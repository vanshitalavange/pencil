import "./Priority.css"
import { useState } from "react"
export const Priority = () => {
    const [priorityListClass, setPriorityListClass] = useState("display-none")
    const togglePriorityListClass = () => {
        setPriorityListClass(className => className === "display-none" ? setPriorityListClass("priority-list") : setPriorityListClass("display-none"))
    }
    return <div className="note-priority">
        <button onClick={() => togglePriorityListClass()} className="btn-priority">Priority</button>
        <ul className={priorityListClass}>
            <li className="priority-list-item">High</li>
            <li className="priority-list-item">Medium</li>
            <li className="priority-list-item">low</li>
        </ul>
    </div>
}