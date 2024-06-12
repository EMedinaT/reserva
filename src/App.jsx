import Navbar from "./components/helpers/Navbar.jsx";
import Inicio from "./components/helpers/Inicio.jsx";
import Reserva from "./components/helpers/Reserva.jsx";
import Sesion from "./components/helpers/Sesion.jsx";
import Loguin from "./components/pages/auth/Loguin.jsx";
import Register from "./components/pages/auth/Register.jsx";
import React from "react";

function App() {
  const [registros, setRegistros] = useState([]);

  // Función para agregar un nuevo registro
  const agregarRegistro = (registro) => {
    setRegistros([...registros, registro]);
  };

  return (
    <>
      <React.Fragment>
        <Navbar />
        <Inicio />
        <Sesion />
        <Reserva agregarRegistro={agregarRegistro} />
        <Loguin registros={registros} />
        <Register />
      </React.Fragment>
    </>
  );
}

export default App;
