import { createContext, useContext, useReducer, useEffect } from "react"
import { reducer, defaultFilters } from "./reducer"
const FiltersContext = createContext({})

const FiltersProvider = ({ children }) => {
    const [filters, dispatchFilters] = useReducer(reducer, defaultFilters)
    return <FiltersContext.Provider value={{ filters, dispatchFilters }}>{children}</FiltersContext.Provider>
}
const useFilters = () => useContext(FiltersContext);

export { useFilters, FiltersProvider } 