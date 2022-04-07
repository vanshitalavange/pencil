import axios from "axios"
export const getArchivedNotes = async (authToken, dispatchNotes) => {
    try {
        const { data } = await axios.get('/api/archives', {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({ type: "GET_ARCHIVED_NOTES", payload: data.archives })
    } catch (error) {
        console.error(error)
    }
}