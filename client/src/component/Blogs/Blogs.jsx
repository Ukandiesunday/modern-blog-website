import { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import BlogCards from "../BlogCards/BlogCards";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const url = "https://modern-blog-website-sever.vercel.app/blogs";
    const data = await axios.get(url).then((res) => res.data);
    setBlogs(data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="blogs">
      <BlogCards blogs={blogs} />
    </div>
  );
};

export default Blogs;
