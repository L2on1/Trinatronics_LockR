import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav sx={{ m: "10 px" }}>
      <Link to="/">Acceuil </Link>
      <Link to="/services">Services </Link>
      <Link to="/profil/:id">Profil </Link>
      <Link to="/lock-r">Lock'R </Link>
    </nav>
  );
}

export default Navbar;
