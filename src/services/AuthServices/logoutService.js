export const logoutService = (setUserState) => {
    localStorage.removeItem("authToken");
    setUserState(userState => ({ ...userState, loginStatus: false}));
};