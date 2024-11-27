export const setUser = (userType) => {
    return { type: "SET_USER", payload: { userType } };
};

export const logoutUser = () => {
    return { type: "LOGOUT_USER" };
};
