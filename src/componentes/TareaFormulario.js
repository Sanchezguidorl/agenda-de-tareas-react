import React from "react";
import "../styles/TareaFormulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completado: false,
    };
    props.agregar(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe la tarea"
        name="texto"
        onChange={manejarCambio}
      ></input>
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}
export default TareaFormulario;
