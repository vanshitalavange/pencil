import { Routes, Route } from "react-router-dom"
import { MockAPI } from "../mockman"
import { Home, Login, Signup } from "../pages/index"
export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mockman" element={<MockAPI />} />
        </Routes>
    )
}