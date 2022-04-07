
const sortByPriority = (filters, notes) => {
    const { priorities } = filters
    if (priorities.length !== 0) {
        return notes.filter(note => priorities.includes(note.priority))
    } else {
        return notes
    }

}
const sortByDate = (filters, notes) => {
    switch (filters.sortByDateType) {
        case "oldToNew":
            return [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
        case "newToOld":
            return [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
        default:
            return notes;
    }
};

const composeFilters =
    (filters, ...sortingFunctions) =>
        (notes) => {
            return sortingFunctions.reduce((acc, curr) => {
                return curr(filters, acc);
            }, notes);
        };

export { sortByPriority, sortByDate, composeFilters }