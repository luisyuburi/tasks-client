import React, { Fragment, useContext } from "react";

import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // Si no hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { id: 1, nombre: "Planeacion del proyecto", estado: true },
    { id: 2, nombre: "Definir estructura del proyecto", estado: true },
    { id: 3, nombre: "Construir Backend", estado: false },
    { id: 4, nombre: "Construir Backend", estado: false },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">No hay tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={() => eliminarProyecto(proyectoActual.id)}
        >
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
