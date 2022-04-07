import axios from "axios"
export const signupService = async (newUserDetails, navigate, setUserState) => {
    try {
        const response = await axios.post("/api/auth/signup", newUserDetails);
        if (response.status === 201) {
            localStorage.setItem('authToken', response.data.encodedToken)
            const { firstName } = response.data.createdUser
            setUserState({ loginStatus: true, firstName,authToken:localStorage.getItem('authToken') })
            navigate("/")
        }
    } catch (error) {
        console.log(error);
    }
};