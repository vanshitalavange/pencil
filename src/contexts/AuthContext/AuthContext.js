import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState({
        loginStatus: false,
        authToken: "",
        firstName: ""
    })
    const authToken = localStorage.getItem('authToken');
    useEffect(() => {
        if (authToken) {
            setUserState(userState => ({ ...userState, loginStatus: true, authToken }))
        }
    }, [userState.authToken])
    return <AuthContext.Provider value={{ userState, setUserState }}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }