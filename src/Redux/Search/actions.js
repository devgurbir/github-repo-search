import axios from "axios"

// action constants
export const actionConstants = {
    SEARCH_GITHUB_REQUEST: "SEARCH_GITHUB_REQUEST",
    SEARCH_GITHUB_SUCCESS: "SEARCH_GITHUB_SUCCESS",
    SEARCH_GITHUB_FAILURE: "SEARCH_GITHUB_FAILURE",
}
// action creators
const searchGithubRequest = () => {
    // request action
    return {
        type: actionConstants.SEARCH_GITHUB_REQUEST
    }
}

const searchGithubSuccess = (data, total_count) => {
    // success action
    return {
        type: actionConstants.SEARCH_GITHUB_SUCCESS,
        payload: {
            data,
            total_count
        }
    }
}

const searchGithubFailure = (err) => {
    // failure action
    return {
        type: actionConstants.SEARCH_GITHUB_FAILURE,
        payload: err
    }
}
// thunks
export const searchGithub = (query, per_page, page) => async (dispatch) => {
    // thunk creator
    dispatch(searchGithubRequest);

    await axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=${per_page}&page=${page}`)
    .then(res => {
        console.log(res.data)
        dispatch(searchGithubSuccess(res.data.items, res.data.total_count))
    })
    .catch(err => dispatch(searchGithubFailure(err)))
}