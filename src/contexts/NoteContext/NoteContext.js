import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getNotes } from "../../services";
import { useAuth } from "../index";
import { reducer } from "./reducer";

const NoteContext = createContext({})

const NoteProvider = ({ children }) => {
    const { userState: { authToken } } = useAuth()
    const [showTextEditor, setShowTextEditor] = useState(false)
    const defaultNoteData = {
        title: "",
        noteText: "",
        tags: [],
        priority: "",
        date: new Date().toLocaleDateString(),
        edit: false
    }
    const [noteData, setNoteData] = useState(defaultNoteData)
    const [notes, dispatchNotes] = useReducer(reducer, [])
    useEffect(() => {
        if (authToken) {
            getNotes(authToken, dispatchNotes)
        }
    }, [authToken])

    useEffect(() => console.log(notes), [notes])
    return <NoteContext.Provider value={{ notes, dispatchNotes, showTextEditor, setShowTextEditor, noteData, setNoteData, defaultNoteData }}>{children}</NoteContext.Provider>
}
const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider }