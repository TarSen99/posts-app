import {
  GET_POSTS,
  GET_IMAGES,
  POST_DETAILS,
  SET_LOADER
} from './../constants'

import {
  getPosts as getPostsList,
  getImages as getImagesList,
  getPostDetails as getPostInfo
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
      const res = await getPostInfo(id)
      const { data } = res
      console.log(111)
      console.log(data)

      dispatch({ type: POST_DETAILS, payload: data})

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