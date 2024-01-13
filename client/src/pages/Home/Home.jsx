import Banner from "../../component/Banner/Banner";
import Blogs from "../../component/Blogs/Blogs";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Blogs />
    </div>
  );
};

export default Home;
