export const defaultFilters = {
    priorities: [],
    sortByDateType: "",
    tags: []
}
export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SORT_BY_PRIORITY": {
            const updatedPriorities = state.priorities.includes(payload) ? state.priorities.filter((item) => item !== payload) : [...state.priorities, payload]
            return { ...state, priorities: updatedPriorities }
        }
        case "SORT_BY_TAGS": {
            const updatedTags = state.tags.includes(payload) ? state.tags.filter((item) => item !== payload) : [...state.tags, payload]
            return { ...state, tags: updatedTags }
        }
        case "SORT_BY_DATE": return { ...state, sortByDateType: payload }
        case "CLEAR_ALL": return { ...defaultFilters }
        default: return state
    }
}