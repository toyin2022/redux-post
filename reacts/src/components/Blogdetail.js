import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedBlog } from "../redux/actions/blogAction";

const Blogdetail = () => {
  const blog = useSelector((state) => state.blog);
  const { userId, title, body } = blog;
  const { blogId } = useParams();
  const dispatch = useDispatch();
  console.log(blog);

  const fetchBlogDetail = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
      .catch((err) => {
        console.log("err:", err);
      });
    dispatch(selectedBlog(response.data));
  };
  useEffect(() => {
    if (blogId && blogId !== "") {
      fetchBlogDetail();
    }
  }, [blogId]);
  return (
    <div className="Blog">
      {Object.keys(blogId).length === 0 ? (
        <div>loading....</div>
      ) : (
        <div className="cardd">
          <div className="show">
            <h2 className="tit">User number: {userId}</h2>
            <h4 className="tit">Blog title: {title}</h4>
            <div className="bod">
              {body}
              {body}
              {body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogdetail;
