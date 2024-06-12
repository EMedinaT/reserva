import React, { useEffect, useState } from "react";
import { connDatabase } from "../../database/firedatabaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [img, setimg] = useState("");
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
    let estado = usuarios.some((usuario) => usuario.user === user);
    return estado;
  };

  function confirmar() {
    Swal.fire({
      title: "Esta seguro que se quiere registrar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, registrarme!",
    }).then((result) => {
      if (result.isConfirmed) {
        crearUsuario();
        Swal.fire({
          title: "Registrado!",
          text: "Usuario registrado correctamente.",
          icon: "success",
        });
        redireccion("/Sesion");
      }
    });
  }

  async function crearUsuario() {
    let nuevoUsuario = {
      user,
      password,
    };
    let collectionUsuario = collection(connDatabase, "usuarios");
    await addDoc(collectionUsuario, nuevoUsuario);
    console.log(nuevoUsuario);
  }
  const registrarUsuario = () => {
    if (!buscarUsuario()) {
        confirmar();
      } else {
      Swal.fire({
        title: "Error",
        text: "Usuario ya existe en la base de datos",
        icon: "error",
      });
    }
  };
  return (
    <>
      <div className="containerR">
        <form className="form-registro" noValidate>
          <div className="">
            <input
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Nombre"
              required
            />
            <div className="valid-feedback">Se ve bien!</div>
          </div>
          {/* <div className="">
            <div className="input-group has-validation">
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                placeholder="Correo"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">
                Por favor, elija un nombre de usuario.
              </div>
            </div>
          </div> */}
          <div className="">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="validationCustom03"
              placeholder="Contraseña"
              required
            />
            <div className="invalid-feedback">
              Por favor proporcione una ciudad válida.
            </div>
          </div>
          {/* <div className="">
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              placeholder="Confirmar Contraseña"
              required
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              placeholder="Celular"
              required
            />
            <div className="valid-feedback">Se ve bien!</div>
          </div> */}
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Aceptar términos y condiciones
              </label>
              <div className="invalid-feedback">
                Debes aceptar antes de enviar.
              </div>
            </div>
          </div>
          <div>
            <button className="btn" onClick={registrarUsuario} type="button">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
