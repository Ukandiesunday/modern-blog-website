import "./Corress.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aisha from "../../images/aisha.jpeg";
import kyle from "../../images/kyle.jpg";
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

const Corress = () => {
  var settings = {
    dots: false,
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

  return (
    <div className="correspondence">
      <div className="correspo-wrapper">
        <h2 className="h2">Our Correspondence</h2>
        <div className="banner-wrapper">
          <div className="slider-container">
            <Slider {...settings} className="slider slide">
              <div className="slide-img-container slide-item">
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt=""
                />
                <h3>Ivan Mehta</h3>
                <span>
                  Okta acquires a16z-backed password manager Uno to develop a
                  personal tier
                </span>
              </div>
              <div className="slider-img-container slide-item">
                <img
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt=""
                />
                <h3>Sarah Perez</h3>
                <span>Meta debuts generative AI features for advertisers</span>
              </div>
              <div className="slider-img-container slide-item">
                <img src={aisha} alt="" />
                <h3>Aisha Malik</h3>
                <span>
                  CoPilot, a training app that matches users with remote fitness
                  coaches, raises $6.5
                </span>
              </div>
              <div className="slider-img-container slide-item">
                <img src={kyle} alt="" />
                <h3>Kyle Wiggers</h3>
                <span>
                  Resy and Eater co-founder raises $24M for Blackbird, a
                  restaurant loyalty platform
                </span>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corress;
