import { createContext, useContext, useEffect, useReducer } from "react";
import { getNotes, addNote } from "../../services";
import { useAuth } from "../index";
import { reducer } from "./reducer";

const NoteContext = createContext({})

const NoteProvider = ({ children }) => {
    const { userState: { loginStatus, authToken } } = useAuth()
    const [notes, dispatchNotes] = useReducer(reducer, [])
    useEffect(() => {
        if (authToken) {
            getNotes(authToken, dispatchNotes)
        }
    }, [authToken])

    const addNoteHandler = (noteData, setShowTextEditor) => {
        addNote(authToken, noteData, dispatchNotes)
        setShowTextEditor(false)
    }
    useEffect(() => console.log(notes), [notes])
    return <NoteContext.Provider value={{ notes, dispatchNotes, addNoteHandler }}>{children}</NoteContext.Provider>
}
const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider }