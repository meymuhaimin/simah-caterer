import React, { useState } from "react";
import "./Header.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={require("./Simah 3.png")} alt="logo" />
          </Link>
        </div>

        <ul>
          <CustomLink to="/menu" name="Menu" />
          <CustomLink to="/portfolio" name="Portfolio" />
          <CustomLink to="/locations" name="Locations" />
          <CustomLink to="/contact" name="Contact" />
        </ul>
        <div
          className={`mobile-header ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <ul className="mobile-menu">
            <CustomLink to="/menu" name="Menu" />
            <CustomLink to="/portfolio" name="Portfolio" />
            <CustomLink to="/locations" name="Locations" />
            <CustomLink to="/contact" name="Contact" />
          </ul>
        </div>
      </div>
    </>
  );
};

function CustomLink(props) {
  const resolvedPath = useResolvedPath(props.to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={props.to}>{props.name}</Link>
    </li>
  );
}

export default Header;
