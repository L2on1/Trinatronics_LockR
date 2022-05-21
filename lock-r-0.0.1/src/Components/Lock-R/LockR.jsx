import React from "react";
import { Link } from "react-router-dom";

function LockR() {
  return (
    <div>
      <h1>Voici les villes ou le borne sont disponible</h1>
      <h2>Liste des villes disponibles</h2>
      <nav>
        <Link to="/lock-r/Mulhouse">Mulhouse</Link>
        <Link to="/lock-r/strasbourg">Strasbourg</Link>
      </nav>
      <h3>Carte google maps</h3>
    </div>
  );
}

export default LockR;
