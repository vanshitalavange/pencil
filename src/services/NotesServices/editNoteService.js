import axios from "axios"
export const editNote = async (authToken, noteId, note, dispatchNotes) => {
    try {
        const { data } = await axios.post(`/api/notes/${noteId}`, { note }, {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({ type: "EDIT_NOTE", payload: data.notes })
    } catch (error) {
        console.error(error)
    }
}