import "./Sidebar.css"
export const Sidebar = () => {
    return <section className="sidebar">
        <ul className="sidebar-list flex-column">
            <li className="list-item flex-row active">
                <span class="material-icons-outlined sidebar-list-icon app-icon">
                    lightbulb
                </span>
                <p>Notes</p>
            </li>
            {/* <li className="list-item flex-row">
                <span class="material-icons-outlined sidebar-list-icon">
                    notifications
                </span>
                <p>Reminder</p>
            </li> */}
            <li className="list-item flex-row">
                <span class="material-icons-outlined sidebar-list-icon app-icon">
                    label
                </span>
                <p>Label</p>
            </li>
            {/* <li className="list-item flex-row">
                <span class="material-icons-outlined sidebar-list-icon">
                    edit
                </span>
                <p>Edit label</p>
            </li> */}
            <li className="list-item flex-row"
            >
                <span class="material-icons-outlined sidebar-list-icon app-icon">
                    archive
                </span>
                <p>Archive</p>
            </li>
            <li className="list-item flex-row">
                <span class="material-icons-outlined app-icon">
                    delete
                </span>
                <p>Trash</p>
            </li>
        </ul>
    </section>
}