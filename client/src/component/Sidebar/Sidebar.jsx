import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = ({ blogs }) => {
  let popularBogs = blogs;
  return (
    <div>
      <div className="sidebar">
        <h2>popular posts</h2>
        {popularBogs?.slice(10, 16)?.map((blog, ind) => (
          <Link key={ind} to={`/blogs/${blog.id}`}>
            <div className="popular-bogs-wrapper">
              <h4>{blog.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
