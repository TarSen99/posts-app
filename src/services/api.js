import api from './apiService'

const getPosts = () => {
  return api.get('/posts')
};

const getImages = () => {
  return api.get('https://picsum.photos/v2/list?limit=100', true);
};

const getPostDetails = (id) => {
  return api.get(`/posts/${id}`)
};

const getPostComments = (id) => {
  return api.get(`/posts/${id}/comments`)
};

export {
  getPosts,
  getImages,
  getPostDetails,
  getPostComments
}