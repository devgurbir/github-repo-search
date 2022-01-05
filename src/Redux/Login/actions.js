// Action constants
export const actionConstants = {
    LOGIN_USER: "LOGIN_USER"
}
// Action creators
export const loginUser = () => {
    return {
        type: actionConstants.LOGIN_USER
    }
}

// Thunks