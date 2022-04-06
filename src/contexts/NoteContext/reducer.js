export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_NOTES":
        case "ADD_NOTE":
        case "EDIT_NOTE":
            return [...payload]
        default: return state
    }
}