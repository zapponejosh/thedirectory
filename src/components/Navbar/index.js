import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand site-name">
        <img className="logo" src="/logo-1.png" alt="logo" />
        theDirectory
      </p>
    </nav>
  );
}

export default Navbar;
