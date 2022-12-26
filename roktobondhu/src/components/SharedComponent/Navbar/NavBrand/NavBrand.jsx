import React from "react";
import "./NavBrand.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Navbar.Brand>
      <Link to="/" className="brandTitle">
        <i class="fa-solid fa-droplet">
          {" "}
          <span>রক্তবন্ধু</span>
        </i>
      </Link>
    </Navbar.Brand>
  );
};

export default NavBrand;
