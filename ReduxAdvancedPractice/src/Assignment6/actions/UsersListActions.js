export const GET_POSTS = "get posts";
export const GET_POSTS_SUCCESS = "success";
export const GET_POSTS_FAILURE = "failure";

export const getPosts = () => ({type: GET_POSTS});
export const getPostsSuccess = (posts) => ({type: GET_POSTS_SUCCESS, payLoad: posts});
export const getPostsFailure = () => ({type: GET_POSTS_FAILURE});

export function fetchPosts()
{
    console.log("mmm");
    return async dispatch => {
        dispatch(getPosts());
        try
        {
            // console.log("UsersList API Start");
            const response = await fetch("https://reqres.in/api/users?page=2")//.then(response => response.json).then(json => {console.log(json)});
            //("https://reqres.in/api/users?page=2");
            //("https://nodeprojheroku.herokuapp.com/Employees");
            const data = await response.json();
            //console.log(data);
            dispatch(getPostsSuccess(data.data));
            // console.log("UsersList API Ends");
        }
        catch(ex)
        {
            dispatch(getPostsFailure());
        }
    }
}