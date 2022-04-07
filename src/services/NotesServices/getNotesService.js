import axios from "axios"
export const getNotes = async (authToken, dispatchNotes) => {
    try {
        const { data } = await axios.get('/api/notes', {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({ type: "GET_NOTES", payload: data.notes })
        return data.notes
    } catch (error) {
        console.error(error)
    }
}