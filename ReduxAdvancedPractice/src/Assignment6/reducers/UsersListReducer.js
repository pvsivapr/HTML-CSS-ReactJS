import * as actions from "./../actions/UsersListActions.js"

export const initialState =
{
    isLoading: false,
    isError: false,
    posts: []
}

export default function postsDispatcher(state = initialState, action) {
    switch (action.type) {
        case actions.GET_POSTS:
            return {
                ...state,
                isLoading: true,
                isError: false,
                posts: []
            };
        // break;
        case actions.GET_POSTS_SUCCESS:
            return {
                isLoading: false,
                isError: false,
                posts: action.payLoad
            }
        // break;
        case actions.GET_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                posts: []
            };
        // break;
        default:
            return initialState;
        // break;
    }
}