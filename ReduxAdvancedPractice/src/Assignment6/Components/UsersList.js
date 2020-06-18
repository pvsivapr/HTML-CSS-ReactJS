import React, { Fragment } from "react"
import { connect } from "react-redux"
import { fetchPosts } from "../actions/UsersListActions";
import { Link } from "react-router-dom";

class UsersList extends React.Component {

    componentDidMount() {
        console.log("UsersList componentDidMount Started");
        const { dispatch, posts } = this.props;
        dispatch(fetchPosts());
        console.log("UsersList componentDidMount Completed");
    }

    render() {
        // console.log("Updated Props", this.props);
        const { posts, isLoading, isError } = this.props;
        const uiComponent = (
            //id, email, first_name, last_name, avatar
            <div>
                <Fragment>Hello Users List</Fragment>
                <div>
                    {(isLoading) ? <Fragment>Loading ....</Fragment> : <Fragment></Fragment>}
                    {(isError) ? <Fragment>Error ....</Fragment> : <Fragment></Fragment>}
                    {(posts?.length > 0) ? <div>{posts.map(item => <Fragment key={item.id}>
                        <Link to={`/User/${item.id}`}>
                             <button >{item.first_name}</button>
                        </Link>
                        </Fragment>
                    )}</div> : <Fragment></Fragment>}
                </div>
            </div>
        )
        return uiComponent;
    }
}

function mapStateToProps(state) {
    // console.log("current state : ", state);
    return {
        isLoading: state.postsDispatcher.isLoading,
        isError: state.postsDispatcher.isError,
        posts: state.postsDispatcher.posts
    };
}
// const mapStateToProps = (state) => (
//     {
//         isLoading: state.posts?.isLoading,
//         isError: state.posts?.isError,
//         posts: state.posts?.posts
//     });

export default connect(mapStateToProps)(UsersList);
// const setDispatchToProps = {
// }
// export default connect(mapStateToProps, setDispatchToProps)(UsersList);
