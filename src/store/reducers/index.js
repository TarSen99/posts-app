import {
  GET_POSTS ,
  GET_IMAGES,
  POST_DETAILS,
  SET_LOADER
} from './../constants'

const initialState = {
  posts: [],
  images: [],
  postDetails: {},
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      };
    case GET_IMAGES:
      return {
        ...state,
        images: state.images.concat(action.payload)
      };
    case POST_DETAILS:
      return {
        ...state,
        postDetails: action.payload
      };
    case SET_LOADER:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state
  }
};

export { rootReducer };