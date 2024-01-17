import { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import BlogCards from "../BlogCards/BlogCards";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  let pageSize = 8;
  useEffect(() => {
    const fetchBlogs = async () => {
      const url = `https://modern-blog-website-sever.vercel.app/blogs?page=${currentPage}&limit=${pageSize}&category=${category}`;

      const data = await axios.get(url).then((res) => res.data.blogs);
      setBlogs(data);
    };
    fetchBlogs();
  }, [currentPage, pageSize, category]);
  console.log(blogs);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setCategory(category);
    setCurrentPage(1);
  };
  return (
    <div>
      <div className="blogs">
        <div className="blogs-left">
          <BlogCards
            blogs={blogs}
            // handleCategoryChange={handleCategoryChange}
            category={category}
            pageSize={pageSize}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div className="blogs-right">
          <h2>Explore popular and current news </h2>
          <div className="category">{/* call category component */}</div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
