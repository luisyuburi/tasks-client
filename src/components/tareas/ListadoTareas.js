import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { id: 1, nombre: "Planeacion del proyecto", estado: true },
    { id: 2, nombre: "Definir estructura del proyecto", estado: true },
    { id: 3, nombre: "Construir Backend", estado: false },
    { id: 4, nombre: "Construir Backend", estado: false },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">No hay tareas</li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
