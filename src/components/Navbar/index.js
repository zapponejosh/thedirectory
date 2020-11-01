import React from "react";
import "./style.css";
import logo from "../../logo-1.png";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <p className="navbar-brand site-name">
        <img className="logo" src={logo} alt="logo" />
        theDirectory
      </p>
    </nav>
  );
}

export default Navbar;
