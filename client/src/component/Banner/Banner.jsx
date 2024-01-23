import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    disableOnInteraction: true,
    autoplaySpeed: 2000,
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
  return (
    <div className="banner">
      <div className="slider-container">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings} className="slider">
          <div className="slider-img-container">
            <img
              src="https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg"
              alt=""
            />
          </div>
          <div className="slider-img-container">
            <img
              src="https://t4.ftcdn.net/jpg/02/78/89/01/360_F_278890190_2485fPOWATgeRr0DPB7I7OYEz9D0oqMg.webp"
              alt=""
            />
          </div>
          <div className="slider-img-container">
            <img
              src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309648.jpg"
              alt=""
            />
          </div>
          <div className="slider-img-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOI979V36ULd7uHUlisFso9gGeaX5FAXvXYDr3og2cSq7YLuYwtE9U4nJQHTYM1wPusRw&usqp=CAU"
              alt=""
            />
          </div>
          <div className="slider-img-container">
            <img
              src="https://img.freepik.com/free-vector/startup-development_1284-22687.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
