import "./Notes.css"
import { Sidebar, TextEditor, NoteCard, Filters } from "../../components"
import { useFilters, useNote } from "../../contexts"
import { sortByPriority, sortByDate, composeFilters } from "../../utils/sortingFunctions"
export const Notes = () => {
    const { notesState, showTextEditor, setShowTextEditor } = useNote()
    const { notes } = notesState
    const { filters } = useFilters()
    const filteredNotes = composeFilters(
        filters,
        sortByPriority,
        sortByDate,
    )(notes);
    const activeItem = { notes: true, archives: false, trash: false }
    return <main className="page-main flex-row">
        <Sidebar activeNavItem={activeItem} />
        <section className="notes-section flex-column">
            <div className="notes-section-header flex-row flex-wrap">
                <div onClick={() => setShowTextEditor(true)} className="new-note  flex-row">
                    <span className="material-icons-round add-icon align-center app-icon">
                        add_circle_outline
                    </span>
                    <div className="new-note-text">
                        <div>Take a note..</div>
                    </div>
                </div>
                <Filters />
            </div>
            {showTextEditor && <TextEditor />}
            <div className="flex-row notes-display-section flex-wrap">{
                filteredNotes.map(note => {
                    return <NoteCard note={note} />
                })
            }</div>
        </section>

    </main>
}