import React, { useContext } from "react";

import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  // obtener el state de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  return (
    <li>
      <button
        type="buton"
        className="btn btn-black"
        onClick={() => proyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
