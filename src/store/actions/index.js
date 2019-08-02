import {
  GET_POSTS,
  GET_IMAGES,
  POST_DETAILS,
  SET_LOADER,
  SET_PAGE,
  SET_MAX_PAGE_VALUE
} from './../constants'


import {
  getPosts as getPostsList,
  getImages as getImagesList,
  getPostDetails as getPostInfo,
  getPostComments,
  getPostAuthor
} from './../../services/api'

const PER_PAGE = 10;

const getPageItems = (items, page, perPage = PER_PAGE) => {
  const filteredItems = items.filter((post, index) => {
    return index >= page * perPage && index < page * perPage + perPage
  });

  return filteredItems
};

const getMaxPageValue = (items, perPage) => {
  return Math.ceil(items.length / perPage)
};

export function getPosts(page = 1) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: SET_LOADER, payload: true})

      const res = await Promise.all([
        getPostsList(),
        getImagesList()
      ]);

      const posts = getPageItems(res[0].data, page);
      const images = getPageItems(res[1].data, page);
      const maxPageValue = getMaxPageValue(res[0].data, PER_PAGE);


      dispatch({ type: GET_POSTS, payload: posts})
      dispatch({ type: GET_IMAGES, payload: images})
      dispatch({ type: SET_PAGE, payload: page})
      dispatch({ type: SET_MAX_PAGE_VALUE, payload: maxPageValue})

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