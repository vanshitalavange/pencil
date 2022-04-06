import "./AddLabel.css"
import { useState } from "react"

export const AddLabel = () => {
    const [labelClass, setLabelClass] = useState("display-none")
    const toggleAddLabel = () => {
        setLabelClass(className => className === "display-none" ? setLabelClass("label-input-container flex-row") : setLabelClass("display-none"))
    }
    return <div className="add-new-label">
        <button onClick={() => toggleAddLabel()}><span class="material-icons-outlined">
            new_label
        </span></button>
        <div className={labelClass}>
            <input type="text" className="label-input" placeholder="Add new label"/>
            <button class="btn-add-label">add</button>
        </div>
    </div>
}