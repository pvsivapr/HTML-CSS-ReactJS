import React, { useEffect, useReducer, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/UserDetailsAction.js";

function User_Details(props) {
    useEffect(() => {
        console.log("user Detail props:", props);
        const { dispatch, match } = props;
        dispatch(fetchPosts(match.params.id));
    }, []);

    const uiComponent = (
        // const {isLoading, isError} = props;
        <div>
            <p>User Details: </p>
            {
                <Fragment>
                    {(props.isLoading) ? <Fragment>Loading ....</Fragment> : <Fragment></Fragment>}
                    {(props.isError) ? <Fragment>Error ....</Fragment> : <Fragment></Fragment>}
                    {(props.posts) ? 
                    <div>
                        <img src={props.posts.avatar} />
                        <p><b>Id: </b> {props.posts?.id}</p>
                        <p><b>UserName: </b> {props.posts?.first_name + props.posts?.last_name}</p>
                        <p><b>Email: </b> {props.posts?.email}</p>
                    </div> : <Fragment></Fragment>
                    }
                </Fragment>
            }
        </div>
    )
    return uiComponent;
}

const mapStateToProps = (state) => {
    console.log("User Details Current State:", state.userDetailDispatcher);
    return {
        //isLoading: state.ud.isLoading
        isLoading: state.userDetailDispatcher.isLoading,
        isError: state.userDetailDispatcher.isError,
        posts: state.userDetailDispatcher.posts
    };
}

// export default connect(mapStateToProps)(User_Details);

const UserDetails = connect(mapStateToProps)(User_Details);
export default UserDetails;