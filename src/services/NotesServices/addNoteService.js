import axios from "axios"
export const addNote = async (authToken, note, dispatchNotes) => {
    try {
        const { data } = await axios.post('/api/notes', { note }, {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({ type: "ADD_NOTE", payload: data.notes })
    } catch (error) {
        console.error(error)
    }
}