import "./ColorPalette.css"
import { useState } from "react"
import { useNote } from "../../contexts"
export const ColorPalette = () => {
    const [paletteClass, setPaletteClass] = useState("display-none")
    const { setNoteData } = useNote()
    const toggleColorPalette = () => {
        setPaletteClass(className => className === "display-none" ? setPaletteClass("palette flex-row flex-wrap") : setPaletteClass("display-none"))
    }
    const paletteColors = ['#FCFFA6', '#cbf0f8', '#aecbfa', '#ccff90', '#CEE5D0', '#fdcfe8', '#e8eaed','#F0D9FF']
    return <div className="color-palette">
        <button onClick={() => toggleColorPalette()} className="btn-color-palette"><span className="material-icons-outlined app-icon">
            palette
        </span></button>
        <div className={paletteClass}>
            {paletteColors.map(color => {
                return <span onClick={() => {
                    setNoteData(noteData => ({ ...noteData, color }))
                    setPaletteClass("display-none")
                }} key={color} style={{ backgroundColor: color }} className="color-selector"></span>
            })}
        </div>
    </div>

}