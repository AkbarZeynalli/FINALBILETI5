import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div>
      <div className="banner-header">
        <h1>Shop by Category</h1>
      </div>
      <div className="banner">
        <div className="banner-item">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp"
            alt=""
          />
        </div>
        <div className="banner-item">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp"
            alt=""
          />
        </div>
        <div className="banner-item">
          <img
            src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
