import "./ColorPalette.css"
import { useState } from "react"
import { useNote } from "../../contexts"
export const ColorPalette = ({ activeElement, setActiveElement }) => {
    const { setNoteData } = useNote()

    const paletteColors = ['#FFFFFF', '#FCFFA6', '#cbf0f8', '#aecbfa', '#ccff90', '#CEE5D0', '#fdcfe8', '#F0D9FF']
    return <div className="color-palette">
        <button onClick={() => {
            setActiveElement(active => ({ showPaletteDropDown: !active.showPaletteDropDown, showAddLabelDropDown: false, showPriorityDropDown: false }))
        }} className="btn-color-palette"><span className="material-icons-outlined app-icon">
                palette
            </span></button>
        {activeElement.showPaletteDropDown && <div className="palette flex-row flex-wrap">
            {paletteColors.map(color => {
                return <span onClick={() => {
                    setNoteData(noteData => ({ ...noteData, color }))
                    setActiveElement(active => ({ ...active, showPaletteDropDown: !active.showPaletteDropDown }))
                }} key={color} style={{ backgroundColor: color, border: color === "#FFFFFF" && "1px solid lightgray" }} className="color-selector"></span>
            })}
        </div>}
    </div>

}