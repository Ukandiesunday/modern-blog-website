import React from "react";
import loaderImg from "../../images/loader.svg";
const Loader = () => {
  return (
    <div className="loader">
      <div className="img-loader-container">
        <img src={loaderImg} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
