import React from "react";
import loaderImg from "../../images/loader.svg";
const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderImg} alt="loader" />
    </div>
  );
};

export default Loader;
