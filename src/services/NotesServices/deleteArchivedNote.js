import axios from "axios"
export const deleteArchivedNote = async (authToken, noteId, dispatchNotes) => {
    try {
        const { data } = await axios.delete(`/api/archives/delete/${noteId}`, {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({ type: "DELETE_ARCHIVED_NOTE", payload: data.archives })
    } catch (error) {
        console.error(error)
    }
}