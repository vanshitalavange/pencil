export const defaultFilters = {
    priorities: [],
    sortByDateType: ""
}
export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "SORT_BY_PRIORITY": {
            const updatedPriorities = state.priorities.includes(payload) ? state.priorities.filter((item) => item !== payload) : [...state.priorities, payload]
            return { ...state, priorities: updatedPriorities }
        }
        case "SORT_BY_DATE": return { ...state, sortByDateType: payload }
        case "CLEAR_ALL": return { ...defaultFilters }
        default: return state
    }
}