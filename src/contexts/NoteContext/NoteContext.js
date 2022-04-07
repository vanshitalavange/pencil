import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getArchivedNotes, getNotes } from "../../services";
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
        date: new Date().toLocaleString(),
        edit: false
    }
    const [noteData, setNoteData] = useState(defaultNoteData)
    const [notesState, dispatchNotes] = useReducer(reducer, {
        notes: [],
        archives: [],
        deletedNotes: []
    })
    useEffect(() => {
        if (authToken) {
            getNotes(authToken, dispatchNotes)
            getArchivedNotes(authToken, dispatchNotes)
        }
    }, [authToken])

    return <NoteContext.Provider value={{ notesState, dispatchNotes, showTextEditor, setShowTextEditor, noteData, setNoteData, defaultNoteData }}>{children}</NoteContext.Provider>
}
const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider }