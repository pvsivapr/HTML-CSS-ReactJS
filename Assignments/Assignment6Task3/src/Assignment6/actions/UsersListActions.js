export const GET_POSTS = "get posts";
export const GET_POSTS_SUCCESS = "success";
export const GET_POSTS_FAILURE = "failure";

export const getPosts = () => ({type: GET_POSTS});
export const getPostsSuccess = (posts) => ({type: GET_POSTS_SUCCESS, payLoad: posts});
export const getPostsFailure = () => ({type: GET_POSTS_FAILURE});

export function fetchPosts()
{
    return async dispatch => {
        dispatch(getPosts());
        try
        {
            const response = await fetch("https://reqres.in/api/users?page=2")
            const data = await response.json();
            dispatch(getPostsSuccess(data.data));
        }
        catch(ex)
        {
            dispatch(getPostsFailure());
            console.log(exception);
        }
    }
}