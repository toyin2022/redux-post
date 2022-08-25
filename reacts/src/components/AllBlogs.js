import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../redux/actions/blogAction";
import EachBlog from "./EachBlog";
import "./allblog.css";
import InputBlog from "./InputBlog";

const AllBlogs = () => {
  const blogs = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchBlog = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((Error) => {
        console.log("err", Error);
      });
    dispatch(setBlog(response.data));
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  console.log("Blogs: ", blogs);
  return (
    <div className="AllBlog">
      <div className="cont">
        <h3>Welcome to T.Blog </h3>
        <p className="ppp">here is the all posted blogs that you require</p>
      </div>
      <InputBlog />
      <EachBlog />
    </div>
  );
};

export default AllBlogs;
