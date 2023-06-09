import React from "react";
import TareaFormulario from "./TareaFormulario";
import "../styles/ListaDeTareas.css";
import { useState } from "react";
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  return (
    <>
      <TareaFormulario agregar={agregarTarea} />
      {tareas.map((element) => (
        <Tarea
          key={element.id}
          texto={element.texto}
          completada={element.completada}
          id={element.id}
          eliminar={eliminarTarea}
          completarTarea={completarTarea}
        />
      ))}
    </>
  );
}
export default ListaDeTareas;
