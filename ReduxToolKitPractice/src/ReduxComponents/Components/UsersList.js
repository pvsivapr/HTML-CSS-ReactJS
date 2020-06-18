import React, { Fragment } from "react"
import { connect } from "react-redux"
import { fetchPosts } from "../actions/UsersListActions";
import { Link } from "react-router-dom";

class UsersList extends React.Component {

    componentDidMount() {
        const { dispatch, posts } = this.props;
        dispatch(fetchPosts());
    }

    render() {
        const { posts, isLoading, isError } = this.props;
        const uiComponent = (
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
    return {
        isLoading: state.postsDispatcher.isLoading,
        isError: state.postsDispatcher.isError,
        posts: state.postsDispatcher.posts
    };
}

export default connect(mapStateToProps)(UsersList);