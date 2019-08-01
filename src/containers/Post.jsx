import React from 'react'
import { connect } from 'react-redux'
import { getPostsDetails } from "../store/actions";

import PostDetails from '../components/PostDetails'

const mapStateToProps = state => {
  return {
    details: state.postDetails,
    loading: state.loading
  }
};

class Post extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(getPostsDetails(id))
  }

  render() {
    const { details, loading } = this.props;

    return (
      <div>
        {
          loading ?
            <h1>LOADING ...</h1> :
            <PostDetails details={details} />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Post)