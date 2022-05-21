import React from "react";
import data_borne from "./data_borne.json";
import data_ville from "../data_ville.json";

function BorneMulhouse2() {
  return (
    <div>
      <h1>
        Borne numéro {data_borne.number} à {data_ville.name}
      </h1>
      <h2>La Borne est {data_borne.propriety.avalable}</h2>
    </div>
  );
}

export default BorneMulhouse2;
