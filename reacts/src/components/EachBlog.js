import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Eachblog.css";
// import InputBlog from "./InputBlog";

const EachBlog = () => {
  const blogs = useSelector((state) => state.allBlogs.blogs);
  const renderBlog = blogs.map((blog) => {
    const { userId, id, title, body } = blog;
    return (
      <div className="EachBlog" key={id}>
        <Link to={`/posts/${id}`}>
          <div className="contt">
            <div className="contentt">
              <div className="connn">
                <div className="user">User number: {userId}</div>
                <div className="tit">Blog title: {title}</div>
                <div className="bod">
                  Blog: {body.substring(0, 40)} ....read more
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    // <InputBlog />
    <>{renderBlog}</>
  );
};

export default EachBlog;
