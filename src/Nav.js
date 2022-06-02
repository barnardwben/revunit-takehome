import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        All Posts
      </Link>
    </nav>
  );
};

export default Nav;
