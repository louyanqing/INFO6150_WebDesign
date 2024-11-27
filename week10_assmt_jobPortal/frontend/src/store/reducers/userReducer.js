const initialState = {
    userType: null, // 'admin' or 'employee'
    isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, ...action.payload, isAuthenticated: true };
        case "LOGOUT_USER":
            return { ...state, userType: null, isAuthenticated: false };
        default:
            return state;
    }
};

export default userReducer;
