import axios from "axios"
export const restoreArchivedNote = async (authToken, noteId, dispatchNotes) => {
    try {
        const {data} = await axios.post(`/api/archives/restore/${noteId}`,{}, {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({type:"RESTORE_ARCHIVED_NOTE",payload:data})
    } catch (error) {
        console.error(error)
    }
}