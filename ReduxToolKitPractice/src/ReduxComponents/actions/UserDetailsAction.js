export const GET_POSTS = "get posts";
export const GET_POSTS_SUCCESS = "success";
export const GET_POSTS_FAILURE = "failure";

export const getPosts = () => ({type: GET_POSTS});
export const getPostsSuccess = (postData) => ({type: GET_POSTS_SUCCESS, payLoad: postData});
export const getPostsFailure = () => ({type: GET_POSTS_FAILURE});

export function fetchPosts(id)
{
    return async dispatch => {
        dispatch(getPosts());
        try
        {
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            const data = await response.json();
            dispatch(getPostsSuccess(data.data));
        }
        catch(exception)
        {
            console.log(exception);
            dispatch(getPostsFailure());
        }
    };
}