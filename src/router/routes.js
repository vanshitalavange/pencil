import { Routes, Route, Navigate } from "react-router-dom"
import { MockAPI } from "../mockman"
import { Home, Login, Signup, Notes } from "../pages/index"
import { useAuth } from "../contexts"
export const Router = () => {
    const { userState: { loginStatus } } = useAuth()
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notes" element={loginStatus ? <Notes /> : <Navigate replace to="/login" />} />
            <Route path="/mockman" element={<MockAPI />} />
        </Routes>
    )
}