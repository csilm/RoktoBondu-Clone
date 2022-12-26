import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

const Navitem = () => {
  const activeStyle = "activeStyle";
  const navLinkClass = `nav-link navItemTitle`;
  const getNavLinkActiveClass = ({ isActive }) =>
    [navLinkClass, isActive && activeStyle].filter(Boolean).join(" ");
  return (
    <Nav className="navItem ms-auto my-2 my-lg-0">
      <NavLink to="/" className={getNavLinkActiveClass}>
        হোম
      </NavLink>
      <NavLink to="/platelet" className={getNavLinkActiveClass}>
        প্লাটিলেট
      </NavLink>
      <NavLink to="/thalassemia" className={getNavLinkActiveClass}>
        থ্যালাসেমিয়া
      </NavLink>
      <NavLink to="/volunteers" className={getNavLinkActiveClass}>
        ভলান্টিয়ার্স
      </NavLink>
      <NavLink to="/partner" className={getNavLinkActiveClass}>
        সহযোগী সংগঠন
      </NavLink>
      <NavLink to="/blog" className={getNavLinkActiveClass}>
        ব্লগ
      </NavLink>
      <NavLink to="/login" className={getNavLinkActiveClass}>
        লগইন
      </NavLink>
      <NavLink to="/signin" className={getNavLinkActiveClass}>
        রেজিস্ট্রেশন
      </NavLink>
    </Nav>
  );
};

export default Navitem;
