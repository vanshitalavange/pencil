import "./ColorPalette.css"
import { useState } from "react"
export const ColorPalette = () => {
    const [paletteClass, setPaletteClass] = useState("display-none")
    const toggleColorPalette = () => {
        setPaletteClass(className => className === "display-none" ? setPaletteClass("palette flex-row flex-wrap") : setPaletteClass("display-none"))
    }
    return <div className="color-palette">
        <button onClick={() => toggleColorPalette()} className="btn-color-palette"><span className="material-icons-outlined app-icon">
            palette
        </span></button>
        <div className={paletteClass}>
            <span className="color-selector" value="#fff475"></span>
            <span className="color-selector" value="#cbf0f8"></span>
            <span className="color-selector" value="#aecbfa"></span>
            <span className="color-selector" value="#ccff90"></span>
            <span className="color-selector" value="#d7aefb"></span>
        </div>
    </div>

}