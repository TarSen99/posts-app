import React from 'react'
import { connect } from 'react-redux'

import ListItem from '../components/list/ListItem'
import { getPosts } from "../store/actions";

const mapStateToProps = state => {
  return { posts: state.posts, loading: state.loading, images: state.images }
};

class PostList extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  render() {
    const { loading, posts, images } = this.props;

    return (
      <div className="container">
        {
          loading ?
            <h1>LOADING...</h1> :
            <div>
              <h2 className="section-title">Latest posts:</h2>
              <div className="post-list-container">
                {
                  posts.map((post, index) => {
                    return (
                      <ListItem post={post} image={images[index]} key={post.id}/>
                    )
                  })
                }
              </div>
            </div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(PostList)