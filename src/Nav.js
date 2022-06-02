import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <Link className="nav-link" to="/">
        All Posts
      </Link>
      <a
        href="https://github.com/barnardwben/revunit-takehome"
        target="_blank"
        className="nav-link"
      >
        Github Repo
      </a>
    </nav>
  );
};

export default Nav;
