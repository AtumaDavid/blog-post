import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

//styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Blog Post</h1>
        </Link>
        <Searchbar />
        <Link to="create">Write an Article</Link>
      </nav>
    </div>
  );
};

export default Navbar;
