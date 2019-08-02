import {
  GET_POSTS,
  GET_IMAGES,
  POST_DETAILS,
  SET_LOADER
} from './../constants'

import {
  getPosts as getPostsList,
  getImages as getImagesList,
  getPostDetails as getPostInfo,
  getPostComments,
  getPostAuthor
} from './../../services/api'

export function getPosts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADER, payload: true})

      const res = await Promise.all([
        getPostsList(),
        getImagesList()
      ]);

      const posts = res[0].data;
      const images = res[1].data;

      console.log('posts')
      console.log(posts)

      dispatch({ type: GET_POSTS, payload: posts})
      dispatch({ type: GET_IMAGES, payload: images})

      dispatch({ type: SET_LOADER, payload: false})
    } catch (e) {
      throw e
    }
  }
}

export function getPostsDetails(id) {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true})

    try {
      const postDetailsResponse = await getPostInfo(id)
      const { data : postDetails } = postDetailsResponse

      const postAuthorDetailsResponse = await getPostAuthor(postDetails.userId)
      const { data : postAuthorDetails } = postAuthorDetailsResponse

      const postCommentsResponse = await getPostComments(postDetails.id)
      const { data : postComments } = postCommentsResponse

      dispatch({
        type: POST_DETAILS,
        payload: {
          postDetails: postDetails,
          authorDetails: postAuthorDetails,
          comments: postComments
        }
      });

      dispatch({ type: SET_LOADER, payload: false})
    } catch (e) {
      throw e
    }
  }
}

export function setLoader(value) {
  return {
    type: SET_LOADER,
    payload: value
  }
}