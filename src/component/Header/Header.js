import React from "react";
import cover from "../../images/cover.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="/home">Home</a>
        <a href="/category">Categories</a>
        <a href="/account">Account</a>
      </nav>
      <img src={cover} alt="" />
    </div>
  );
};

export default Header;
