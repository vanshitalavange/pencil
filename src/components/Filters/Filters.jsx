import "./Filters.css"
import { useFilters } from "../../contexts"
import { useState } from "react"
export const Filters = () => {
    const { filters, dispatchFilters } = useFilters()
    const { sortByDateType, priorities } = filters
    const [showFiltersList, setShowFiltersList] = useState(false)
    return <div className="filters-wrapper flex-column">
        <div onClick={() => setShowFiltersList(showFiltersList => !showFiltersList)} className="filters flex-row">
            <span className="align-center sort-by-text">Sort by</span>
            <span class="material-icons app-icon filter-icon align-center">
                sort
            </span>
        </div>
        {showFiltersList && <ul class="filters-list flex-column">
            <div className="filters-list-item flex-column">
                <p>Sort by priority</p>
                <div className="filter-options flex-column">
                    <label class="filter-label flex-row" htmlFor="high"><input value="high" onChange={(event) => dispatchFilters({ type: "SORT_BY_PRIORITY", payload: event.target.value })} type="checkbox" id="high" class="priority-selector" checked={priorities.includes("high")} />high</label>

                    <label class="filter-label flex-row" htmlFor="medium"><input value="medium" onChange={(event) => dispatchFilters({ type: "SORT_BY_PRIORITY", payload: event.target.value })} type="checkbox" id="medium" class="priority-selector" checked={priorities.includes("medium")} />medium</label>

                    <label class="filter-label flex-row" htmlFor="low"><input value="low" onChange={(event) => dispatchFilters({ type: "SORT_BY_PRIORITY", payload: event.target.value })} type="checkbox" id="low" class="priority-selector" checked={priorities.includes("low")} />low</label>
                </div>
            </div>
            <div className="filters-list-item flex-column">
                <p>Sort by date</p>
                <div className="filter-options flex-column">
                    <label class="filter-label flex-row" htmlFor="old-to-new"><input value="oldToNew" onChange={(event) => dispatchFilters({ type: "SORT_BY_DATE", payload: event.target.value })} type="radio" id="old-to-new" name="date-filter-selector" class="date-filter-selector" checked={sortByDateType === "oldToNew"} />old to new</label>

                    <label class="filter-label flex-row" htmlFor="new-to-old"><input value="newToOld" onChange={(event) => dispatchFilters({ type: "SORT_BY_DATE", payload: event.target.value })} type="radio" id="new-to-old" name="date-filter-selector" class="date-filter-selector" checked={sortByDateType === "newToOld"} />new to old</label>
                </div>
            </div>
            <button onClick={() => dispatchFilters({ type: "CLEAR_ALL" })} className="btn-clear-all">Clear all</button>
        </ul>}
    </div>
}