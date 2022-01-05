import { actionConstants } from "./actions";

const initState = {
    isAuth: false
}

const loginReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.LOGIN_USER:
            return {
                ...state,
                isAuth: !state.isAuth
            }
        default:
            return state
    }
}

export default loginReducer