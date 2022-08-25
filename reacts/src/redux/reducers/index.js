import { combineReducers } from "redux";
import {
  blogReducer,
  selectedBlogReducer,
  addBlogReducer,
} from "./blogReducer";

const reducers = combineReducers({
  allBlogs: blogReducer,
  blog: selectedBlogReducer,
  addBlog: addBlogReducer,
});

export default reducers;
