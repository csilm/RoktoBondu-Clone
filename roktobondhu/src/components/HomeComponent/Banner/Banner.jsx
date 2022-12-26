import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import Button from "../../SharedComponent/Button/Button";

const Banner = () => {
  return (
    <div className="mainBanner">
      <div className="bannerBlackOverlay">
        <h2 className="bannerTitle text-center">সাহসী হোন এবং রক্তদান করুন</h2>
        <p className="my-3">
          <Link to="/signin">
            <Button
              btnClass="btn btn-danger bannerBtn"
              name="আসুন রক্তদান করি"
              style={{ color: "ED0404" }}
            />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
