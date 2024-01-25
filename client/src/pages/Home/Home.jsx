import Banner from "../../component/Banner/Banner";
import Blogs from "../../component/Blogs/Blogs";
import Weather from "../../component/Weather/Weather";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Blogs />
      <Weather />
    </div>
  );
};

export default Home;
