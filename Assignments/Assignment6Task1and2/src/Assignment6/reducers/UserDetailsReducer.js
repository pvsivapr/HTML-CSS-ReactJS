import * as actions from "./../actions/UserDetailsAction.js"

export const initialState = {
    isLoading: false,
    isError: false,
    posts: {}
}

export default function userDetailsDispatcher(state = initialState, action)
{
    switch (action.type) {
        case actions.GET_POSTS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                posts: {}
            };
        case actions.GET_POSTS_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                posts: action.payLoad
            }
        case actions.GET_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                posts: {}
            };
        default:
            return initialState;
    }
}