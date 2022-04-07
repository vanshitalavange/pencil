import axios from "axios"
export const deleteNote = async (authToken, noteId, dispatchNotes, note, allNotes) => {
    try {
        const response = await axios.delete(`/api/notes/${noteId}`, {
            headers: {
                authorization: authToken
            }
        })
        console.log("data from delete service", response)
        dispatchNotes({ type: "DELETE_NOTE", payload: { notes: response.data.notes, deletedNote: note } })
    } catch (error) {
        console.error(error)
    }
}