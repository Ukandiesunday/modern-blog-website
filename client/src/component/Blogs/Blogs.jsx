import "./Blogs.css";

import BlogCards from "../BlogCards/BlogCards";
import Category from "../Category/Category";
import Sidebar from "../Sidebar/Sidebar";
import { useGlobalContext } from "../../context";
import Loader from "../Loader/Loader";
const Blogs = () => {
  const {
    blogs,
    currentPage,
    category,
    activeCategory,
    handlePageChange,
    handleCategoryChange,
    isLoading,
    pageSize,
  } = useGlobalContext();
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (blogs.length < 0) {
    return (
      <div className="no-blogs " style={{ textAlign: "center" }}>
        no blogs found
      </div>
    );
  }
  return (
    <div className="blogs-container">
      <div className="blogs-wrapper">
        <div className="category">
          <Category
            selectedCategory={category}
            handleCategoryChange={handleCategoryChange}
            blogs={blogs}
            activeCategory={activeCategory}
          />
        </div>
        <div className="blog-space">
          <div className="blogs">
            <div className="blogs-left">
              <BlogCards
                blogs={blogs}
                category={category}
                pageSize={pageSize}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
            <div className="blogs-right">
              <Sidebar blogs={blogs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
