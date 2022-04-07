import "./Sidebar.css"
import { useNavigate } from "react-router-dom"
export const Sidebar = ({ activeNavItem }) => {
    const navigate = useNavigate()
    const { notes, archives, trash } = { ...activeNavItem }
    return <section className="sidebar">
        <ul className="sidebar-list flex-column">
            <li onClick={() => navigate('/notes')} className={notes ? "list-item flex-row active" : "list-item flex-row"}>
                <span class="material-icons-outlined sidebar-list-icon app-icon">
                    lightbulb
                </span>
                <p>Notes</p>
            </li>
            <li onClick={() => navigate('/archives')} className={archives ? `list-item flex-row active` : `list-item flex-row`}
            >
                <span class="material-icons-outlined sidebar-list-icon app-icon">
                    archive
                </span>
                <p>Archives</p>
            </li>
            <li onClick={() => navigate('/trash')} className={trash ? `list-item flex-row active` : `list-item flex-row`}>
                <span class="material-icons-outlined app-icon">
                    delete
                </span>
                <p>Trash</p>
            </li>
        </ul>
    </section>
}