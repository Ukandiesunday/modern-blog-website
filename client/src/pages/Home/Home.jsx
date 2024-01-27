import Banner from "../../component/Banner/Banner";
import Blogs from "../../component/Blogs/Blogs";
import Corress from "../../component/Correspondent/Corress";
import Weather from "../../component/Weather/Weather";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Blogs />

      <Weather />
      <Corress />
    </div>
  );
};

export default Home;
