import "./BlogCards.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
          href="#"
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <div className="blog-cards">
      <div className="card-container">
        {filteredBlogs?.map((blog) => (
          <div key={blog.id} className="card-wrapper">
            <div className="img-container">
              <img src={blog?.image} alt="" />
            </div>
            <div className="items-wrapper">
              <h4>{blog?.title}</h4>
              <p>{blog?.content}</p>
              {/* <img src={blog?.authorPic} alt="" /> */}
              <span>{blog?.author}</span>
              <span>{blog?.published_date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* display pagination */}
      <div className="pagination">
        <p>
          page {currentPage} of {totalPage} pages
        </p>
        <ul className="pagination-container">
          <li>
            <button
              className="btns btns1"
              onClick={() => handlePageChange(currentPage - 1)}
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
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPage}
            >
              <IoIosArrowForward />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogCards;
