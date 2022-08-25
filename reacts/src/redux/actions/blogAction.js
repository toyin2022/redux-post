import { ActionTypes } from "../constants/action-types";

export const setBlog = (blogs) => {
  return {
    type: ActionTypes.SET_BLOG,
    payload: blogs,
  };
};
export const selectedBlog = (blog) => {
  return {
    type: ActionTypes.SELECTED_BLOG,
    payload: blog,
  };
};
export const addBlog = (Blog) => {
  return {
    type: ActionTypes.ADD_BLOG,
    payload: Blog,
  };
};
