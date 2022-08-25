import { ActionTypes } from "../constants/action-types";

const initialState = {
  blogs: [],
};

export const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BLOG:
      return { ...state, blogs: payload };
    default:
      return state;
  }
};
export const selectedBlogReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_BLOG:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export const addBlogReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_BLOG:
      const blogs = state.posts.concat(payload);
      return { ...state, blogs: payload };
    default:
      return state;
  }
};
