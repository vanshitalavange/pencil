import axios from "axios"
export const archiveNote = async (authToken, noteId, note, dispatchNotes) => {
    try {
        const {data} = await axios.post(`/api/notes/archives/${noteId}`, { note }, {
            headers: {
                authorization: authToken
            }
        })
        dispatchNotes({type:"ARCHIVE_NOTE",payload:data})
    } catch (error) {
        console.error(error)
    }
}