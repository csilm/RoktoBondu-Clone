import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="text-white mt-4 mb-0 pb-0"
      style={{ backgroundColor: "#ED0404" }}
    >
      <div className="container">
        <footer>
          <div className="py-3">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-white ">
                  হোম
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/platelet" className="nav-link px-2 text-white">
                  প্লাটিলেট
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/thalassemia" className="nav-link px-2 text-white">
                  থ্যালাসেমিয়া
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/volunteers" className="nav-link px-2 text-white">
                  ভলান্টিয়ার্স
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link px-2 text-white">
                  লগইন
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link px-2 text-white">
                  রেজিস্ট্রেশন
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="logo">রক্তবন্ধু</span>
              <span className="text-white">
                {" "}
                © 2018-2022 || All Right Reserved
              </span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174848.png"
                  alt="facebook"
                  className="footerIcon"
                />
              </li>
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                  alt="instagram"
                  className="footerIcon"
                />
              </li>
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="linkedIn"
                  className="footerIcon"
                />
              </li>
              <li className="ms-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="Github"
                  className="footerIcon"
                />
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
