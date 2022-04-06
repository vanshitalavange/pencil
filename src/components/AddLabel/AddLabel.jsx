import "./AddLabel.css"
import { useState } from "react"
import { getFormInput } from "../../utils/getFormInput"

export const AddLabel = ({ noteData, setNoteData }) => {
    const [labelText, setLabelText] = useState("");
    const [labelClass, setLabelClass] = useState("display-none")
    const toggleAddLabel = () => {
        setLabelClass(className => className === "display-none" ? setLabelClass("label-input-container flex-row") : setLabelClass("display-none"))
    }
    return <div className="add-new-label">
        <button onClick={() => toggleAddLabel()}><span className="material-icons-outlined">
            new_label
        </span></button>
        <div className={labelClass}>
            <input onChange={(event) => setLabelText(event.target.value)} value={labelText} type="text" className="label-input" placeholder="Add new label" />
            <button onClick={(event) => {
                getFormInput(event, setNoteData, "tags", labelText)
                setLabelClass("display-none")
                setLabelText("")
            }
            } className="btn-add-label">add</button>
        </div>
    </div>
}