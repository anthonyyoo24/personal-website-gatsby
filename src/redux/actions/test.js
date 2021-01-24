import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { fetchPost, fetchPosts, changeHeaderStyle } from './index';

//try catch

const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const testDispatchedActions = async (store, expectedAction, action) => {
  await store.dispatch(action);
  const actions = store.getActions();
  expect(actions[0]).toEqual(expectedAction);
};

afterEach(() => {
  store.clearActions();
});

describe('changeHeaderStyle action creator', () => {
  it('dispatches the action with the type CLEAR_HEADER when you pass in "home"', () => {
    const expectedAction = { type: 'CLEAR_HEADER' };
    testDispatchedActions(store, expectedAction, changeHeaderStyle('home'));
  });

  it('dispatches the action with the type FILL_HEADER when called with no arguments', () => {
    const expectedAction = { type: 'FILL_HEADER' };
    testDispatchedActions(store, expectedAction, changeHeaderStyle());
  });
});

describe('Posts', () => {
  it('should dispatch the correct action when the fetchPost action creator gets invoked', () => {
    const expectedResponse = {
      data: [
        {
          slug: 'transitioning-to-gatsby-from-create-react-app',
          title: 'Transitioning to Gatsby from Create React App',
          body: '<p>I love Gatsby</p>',
          published: '2020-11-30',
        },
      ],
    };

    const response = { data: expectedResponse };
    axios.get.mockResolvedValue(response);

    const expectedAction = { type: 'FETCH_POST', payload: expectedResponse.data };
    testDispatchedActions(store, expectedAction, fetchPost());
  });

  it('should dispatch the correct action when the fetchedPosts action creator gets invoked', () => {
    const expectedResponse = {
      data: [
        {
          slug: 'transitioning-to-gatsby-from-create-react-app',
          title: 'Transitioning to Gatsby from Create React App',
          body: '<p>I love Gatsby</p>',
          published: '2020-11-30',
        },
        {
          slug: 'how-to-implement-a-ci-cd-pipeline',
          title: 'How to Implement a CI CD Pipeline',
          body: '<p>Using Github Actions</p>',
          published: '2020-12-30',
        },
      ],
    };

    const response = { data: expectedResponse };
    axios.get.mockResolvedValue(response);

    const expectedAction = { type: 'FETCH_POSTS', payload: expectedResponse.data };
    testDispatchedActions(store, expectedAction, fetchPosts());
  });
});
