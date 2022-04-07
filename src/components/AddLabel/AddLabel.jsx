import "./AddLabel.css"
import { useState } from "react"
import { getFormInput } from "../../utils/getFormInput"
import { useNote } from "../../contexts"
export const AddLabel = ({ activeElement, setActiveElement }) => {
    const { setNoteData } = useNote()
    return <div className="add-new-label">
        <button onClick={() => setActiveElement(active => ({ showPaletteDropDown: false, showAddLabelDropDown: !active.showAddLabelDropDown, showPriorityDropDown: false }))
        }><span className="material-icons-outlined">
                new_label
            </span></button>
        {activeElement.showAddLabelDropDown && <ul className="tags-list">
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "tag", "work")
                setActiveElement(active => ({ ...active, showAddLabelDropDown: !active.showAddLabelDropDown }))
            }
            } className="tags-list-item">work</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "tag", "important")
                setActiveElement(active => ({ ...active, showAddLabelDropDown: !active.showAddLabelDropDown }))

            }
            } className="tags-list-item">important</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "tag", "secondary")
                setActiveElement(active => ({ ...active, showAddLabelDropDown: !active.showAddLabelDropDown }))

            }
            } className="tags-list-item">secondary</li>
            <li onClick={(event) => {
                getFormInput(event, setNoteData, "tag", "chores")
                setActiveElement(active => ({ ...active, showAddLabelDropDown: !active.showAddLabelDropDown }))

            }
            } className="tags-list-item">chores</li>
        </ul >}
    </div>
}