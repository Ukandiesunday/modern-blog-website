import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./RelatedBlogs.css";
import { FaUserAstronaut } from "react-icons/fa";

const RelatedBlogs = ({ relatedCategory }) => {
  const { blogs } = useGlobalContext();
  const filterRelatedBlogs = blogs.filter(
    (item) => item.category === relatedCategory
  );
  return (
    <div className="related-blog">
      <h2 className="h2">read {relatedCategory} related posts</h2>
      <div className="card-container">
        {filterRelatedBlogs?.slice(2, 5).map((blog) => (
          <div key={blog.id} className="card-wrapper">
            <Link to={`/blogs/${blog.id}`}>
              <div className="img-container">
                <img src={blog?.image} alt="" />
              </div>
              <div className="items-wrapper">
                <h4>{blog?.title}</h4>
                <p>{blog?.content}</p>
                <div>
                  <FaUserAstronaut />
                  Author: {blog?.author}
                </div>
                <div> Public date: {blog?.published_date}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
