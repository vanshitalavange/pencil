export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "GET_NOTES":
        case "ADD_NOTE":
            return [...payload]
        default: return state
    }
}