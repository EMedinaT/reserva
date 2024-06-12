import React, { useEffect, useState } from "react";
import { connDatabase } from "../database/firedatabaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sesion = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  let redireccion = useNavigate();

  async function getUsuarios() {
    let collectionUsuarios = collection(connDatabase, "usuarios");
    let resultado = await getDocs(collectionUsuarios);
    setUsuarios(resultado.docs.map((doc) => ({ ...doc.data() })));
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
  }
  useEffect(() => {
    getUsuarios();
  }, []);
  const buscarUsuario = () => {
    let estado = usuarios.some(
      (usuario) => usuario.user === user && usuario.password === password
    );
    return estado;
  };
  const iniciarSesion = () => {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Bienvenido...",
        text: "Ahora podras reservar",
        icon: "success",
      });
      redireccion("/reserva");
    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario y/o contraseña incorrecto",
        icon: "error",
      });
      redireccion("/");
    }
  };
  return (
    <>
      <div className="Loguin">
        <div className="formulario">
          <h5>Bienvenidos</h5>
          <form>
            <div>
              <input
                onChange={(e) => setUser(e.target.value)}
                type="email"
                placeholder="Usuario"
                className="form-control"
                id="Usuario"
              ></input>
            </div>
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Contraseña"
                className="form-control"
                id="password1"
              ></input>
              <a className="dropdown-item" href="#">
                Olvidaste tu contraseña?
              </a>
            </div>
            <Link onClick={iniciarSesion} className="btn" type="button">
              Iniciar sesión
            </Link>
            <Link id="registrate " className="btn" to="/registro">
              Registrate
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sesion;
