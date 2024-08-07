import "./BlogCards.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCards = ({
  blogs,
  pageSize,
  currentPage,
  category,
  handlePageChange,
}) => {
  const filteredBlogs = blogs
    .filter((blog) => !category || blog.category === category)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Pagination

  const totalPage = Math.ceil(blogs.length / pageSize);
  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
    return pageNumbers.map((pageNumber) => (
      <li key={pageNumber}>
        <a
          className={currentPage === pageNumber ? "active-page" : ""}
          href="/#"
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <div className="blog-cards">
      <div className="blog-cards-wrapper">
        <h2 className="h2">stay updated with our latest world news</h2>
        {filteredBlogs.length > 0 ? (
          <div className="card-container">
            {filteredBlogs?.map((blog) => (
              <div key={blog.id} className="card-wrapper">
                <Link
                  to={`/blogs/${blog.id}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <div className="img-container">
                    <img src={blog?.image} alt="" />
                  </div>
                  <div className="items-wrapper">
                    <h4>{blog?.title}</h4>
                    <p>{blog?.content}</p>

                    <div>
                      <FaUserAstronaut /> {""}
                      Author: {blog?.author}
                    </div>
                    <div className="date-container">
                      Published: {blog?.published_date}
                      <span className="learn-more">Learn More</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-blogs">
            <h2>No blogs found.</h2>
            Category probably has limited blogs.
          </div>
        )}

        {/* display pagination */}
        <div className="pagination">
          <p>
            page {currentPage} of {totalPage} pages
          </p>
          <ul className="pagination-container">
            <li>
              <button
                className="btns btns1"
                onClick={() => {
                  handlePageChange(currentPage - 1);
                  window.scrollTo({ top: 100 });
                }}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack />
              </button>
            </li>
            <div className="pageNumber-container">
              <div className="pageNumber-wrapper">{renderPagination()}</div>
            </div>
            <li>
              <button
                className="btns btns2"
                onClick={() => {
                  handlePageChange(currentPage + 1);
                  window.scrollTo({ top: 100 });
                }}
                disabled={currentPage === totalPage}
              >
                <IoIosArrowForward />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
