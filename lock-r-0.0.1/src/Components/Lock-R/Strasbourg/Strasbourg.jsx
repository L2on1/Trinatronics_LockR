import React from "react";
import { Link, Outlet } from "react-router-dom";
import data_ville from "./data_ville.json";

function Strasbourg() {
  return (
    <div>
      <nav>
        <Link to="/lock-r/Mulhouse">Mulhouse</Link>
        <Link to="/lock-r/strasbourg">Strasbourg</Link>
      </nav>
      <h1>Voici les bornes disponible à {data_ville.name}</h1>
      <h2>Voici la carte des bornes</h2>
      <h3>
        Voici les bornes disponibles
        <nav>
          <Link to="/lock-r/strasbourg/borne_1">Borne 1</Link>
          <Link to="/lock-r/strasbourg/borne_2">Borne 2</Link>
        </nav>
        <Outlet />
      </h3>
    </div>
  );
}

export default Strasbourg;
