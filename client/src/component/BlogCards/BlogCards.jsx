import "./BlogCards.css";
import React from "react";

const BlogCards = ({ blogs }) => {
  const filteredBlogs = blogs;
  console.log(filteredBlogs);
  return (
    <div className="blogCards">
      {filteredBlogs.map((blog) => (
        <div className="blogs-wrapper">
          <div>
            <img src={blog.image} alt="" />
          </div>
          <h4>{blog.content}</h4>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
