import React from "react";
import logo from "./favicon.png";

function Header() {
  return (
    <div className="Header-logo">
      <img src={logo} height={40} width={40} />
    </div>
  );
}
export default Header;
