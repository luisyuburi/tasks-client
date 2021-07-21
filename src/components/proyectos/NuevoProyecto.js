import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorFormulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;

  // State para Proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extrae nombre de proyecto
  const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario envia un proyecto
  const OnSubmitProyecto = (e) => {
    e.preventDefault();

    // Valida el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    // Agrega al state
    agregarProyecto(proyecto);

    // Reinicia el form
    guardarProyecto({
      nombre: "",
    });
  };

  const onClick = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClick}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={OnSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChangeProyecto}
            value={nombre}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorFormulario ? (
        <p className="mensaje error">El nombre del proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
