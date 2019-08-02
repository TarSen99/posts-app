import {
  GET_POSTS ,
  GET_IMAGES,
  POST_DETAILS,
  SET_LOADER,
  SET_PAGE,
  SET_MAX_PAGE_VALUE
} from './../constants'

const initialState = {
  posts: [],
  images: [],
  postDetails: {},
  loading: false,
  page: 1,
  maxPageValue: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload
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
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      };
    case SET_MAX_PAGE_VALUE:
      return {
        ...state,
        maxPageValue: action.payload
      };
    default:
      return state
  }
};

export { rootReducer };