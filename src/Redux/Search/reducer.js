import { actionConstants } from "./actions";

const initState = {
    isLoading: false,
    isError: false,
    searchData: [],
    totalItems: 0
}

const searchReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.SEARCH_GITHUB_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actionConstants.SEARCH_GITHUB_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                searchData: action.payload.data,
                totalItems: action.payload.total_count
            }
        case actionConstants.SEARCH_GITHUB_FAILURE:            
            return {
                ...state,
                isLoading: false,
                isError: true
            }     
        default:
            return state
    }
}

export default searchReducer