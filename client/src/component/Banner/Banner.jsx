import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aiboy from "../../images/Aiboy.jpeg";
import laptechtool from "../../images/laptechtool.webp";
import robot from "../../images/Robot.jpg";
import laptop from "../../images/laptop.avif";
import "./Banner.css";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    disableOnInteraction: true,
    pauseOnMouseHover: false,
    autoplaySpeed: 4000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const dateFormatted = today.toLocaleDateString("en-US", options);
  return (
    <div className="banner">
      <div className="banner-container">
        <h3>{dateFormatted}</h3>
        <div className="banner-wrapper">
          <div className="slider-container">
            <Slider {...settings} className="slider">
              <div className="slider-img-container">
                <img src={laptechtool} alt="" />
              </div>
              <div className="slider-img-container">
                <img src={aiboy} alt="ai boy" />
              </div>
              <div className="slider-img-container">
                <img src={laptechtool} alt="" />
              </div>
              <div className="slider-img-container">
                <img src={laptop} alt="" />
              </div>
              <div className="slider-img-container">
                <img src={robot} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
