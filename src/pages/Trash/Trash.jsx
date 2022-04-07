import { useNote } from "../../contexts"
import { NoteCard, Sidebar } from "../../components"
export const Trash = () => {
    const { notesState: { deletedNotes } } = useNote()
    const activeItem = { notes: false, archives: false, trash: true }
    return <main className="page-main flex-row">
        <Sidebar activeNavItem={activeItem} />
        <section className="archived-notes flex-row flex-wrap">
            {
                deletedNotes.length === 0 ? <div>No trashed notes</div> :
                    deletedNotes.map(note => {
                        return <NoteCard key={note._id} note={note} />
                    })
            }
        </section>
    </main>
}