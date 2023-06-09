import "./App.css";
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className="free-contenedor-logo">
        <img
          src={require("./imagenes/free-logo.png")}
          className="free-logo"
          alt="logo de freecodecamp"
        />
      </div>
      <div className="main">
        <h1>Mis tareas</h1>
       <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
