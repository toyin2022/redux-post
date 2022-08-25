import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./allblog.css";
import { addBlog } from "../redux/actions/blogAction";

export default function InputBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsPending(true);
    const blogObj = { title, body };
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          blogObj,
        }
      );
      console.log("blog have been posted");
      setIsPending(false);
      dispatch({ type: addBlog(res.data) });
      setTitle("");
      setBody("");
    } catch (err) {
      console.log(err, "error here");
    }
    console.log(blogObj);
  };

  return (
    <div className="inp">
      <h3>Add new post</h3>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <div className="in">
            {/* <label>post title</label> */}
            <input
              className="form-control"
              type="text"
              placeholder="Enter Blog Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="inn">
            {/* <label>blog body</label> */}
            <textarea
              className="form-control mb-3"
              value={body}
              placeholder="Type Your Post Here..."
              required
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
        </div>
        {!isPending && <button className="btn btn-danger">Upload Post</button>}
        {isPending && (
          <button disabled className="btn btn-danger">
            Uploading Post....
          </button>
        )}
      </form>
    </div>
  );
}
