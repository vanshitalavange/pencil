import "./Archives.css"
import { useNote } from "../../contexts"
import { NoteCard, Sidebar } from "../../components"
export const Archives = () => {
    const { notesState: { archives } } = useNote()
    const activeItem = { notes: false, archives: true, trash: false }
    return <main className="page-main flex-row">
        <Sidebar activeNavItem={activeItem} />
        <section className="archived-notes flex-row flex-wrap">
            {
                archives.length === 0 ? <div>No archived notes</div> :
                    archives.map(note => {
                        return <NoteCard key={note._id} note={note} />
                    })
            }
        </section>
    </main>
}