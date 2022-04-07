export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_NOTES":
        case "ADD_NOTE":
        case "EDIT_NOTE":
            return { ...state, notes: [...payload] }
        case "DELETE_NOTE": {
            return { ...state, notes: payload.notes, deletedNotes: [...state.deletedNotes, payload.deletedNote] }
        }
        case "ARCHIVE_NOTE":
        case "RESTORE_ARCHIVED_NOTE":
            return { ...state, archives: [...payload.archives], notes: [...payload.notes] }
        case "GET_ARCHIVED_NOTES":
        case "DELETE_ARCHIVED_NOTE":
            return { ...state, archives: [...payload] }
        case "DELETE_FROM_TRASH": {
            console.log("existing deleted notes", state.deletedNotes)
            const updatedTrashItems = state.deletedNotes.filter(note => note !== payload)
            console.log("updated deleted notes", updatedTrashItems)
            return { ...state, deletedNotes: updatedTrashItems }
        }
        default: return state
    }
}