import React from "react";
import { Container, Navbar as BSNavbar } from "react-bootstrap";
import NavBrand from "./NavBrand/NavBrand";
import Navitem from "./NavItem/NavItem";


const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="bg-light" fixed="top">
      <Container>
        <NavBrand />
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Navitem />
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
