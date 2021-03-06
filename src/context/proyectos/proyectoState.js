import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Neobank" },
  ];

  const initialState = {
    proyectos: [],
    proyecto: null,
    formulario: false,
    errorFormulario: false,
  };

  // Dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  // Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuid();

    // Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  // Valida el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  // Selecciona el proyecto que el usuario dio click
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId,
    });
  };

  // Elimina un proyecto
  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        proyecto: state.proyecto,
        formulario: state.formulario,
        errorFormulario: state.errorFormulario,
        mostrarError,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
