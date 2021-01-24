import _ from 'lodash';
import { buttercms, axiosConfig } from '../../apis/buttercms';

export const fetchPosts = () => async dispatch => {
  const response = await buttercms.get('/posts', axiosConfig);

  localStorage.setItem('posts', JSON.stringify({ ..._.mapKeys(response.data.data, 'slug') }));

  dispatch({ type: 'FETCH_POSTS', payload: response.data.data });
};

export const fetchPost = slug => async dispatch => {
  const response = await buttercms.get(`/posts/${slug}`, axiosConfig);

  dispatch({ type: 'FETCH_POST', payload: response.data.data });
};

export const changeHeaderStyle = page => {
  if (page === 'home') {
    return { type: 'CLEAR_HEADER' };
  } else {
    return { type: 'FILL_HEADER' };
  }
};
