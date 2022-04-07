import "./AddLabel.css"
import { useState } from "react"
import { getFormInput } from "../../utils/getFormInput"
import { useNote } from "../../contexts"
export const AddLabel = ({ activeElement, setActiveElement }) => {
    const { setNoteData } = useNote()
    const [labelText, setLabelText] = useState("");
    return <div className="add-new-label">
        <button onClick={() => setActiveElement(active => ({ showPaletteDropDown: false, showAddLabelDropDown: !active.showAddLabelDropDown, showPriorityDropDown: false }))
        }><span className="material-icons-outlined">
                new_label
            </span></button>
        {activeElement.showAddLabelDropDown && <div className="label-input-container flex-row">
            <input onChange={(event) => setLabelText(event.target.value)} value={labelText} type="text" className="label-input" placeholder="Add new label" />
            <button onClick={(event) => {
                getFormInput(event, setNoteData, "tags", labelText)
                setActiveElement(active => ({ ...active, showAddLabelDropDown: !active.showAddLabelDropDown }))
                setLabelText("")
            }
            } className="btn-add-label">add</button>
        </div>}
    </div>
}