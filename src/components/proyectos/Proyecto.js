import React from "react";

const Proyecto = ({ proyecto }) => {
  return (
    <li>
      <button type="buton" className="btn btn-black">
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
