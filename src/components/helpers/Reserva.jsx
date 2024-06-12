import { Link } from "react-router-dom";
import React, { useState } from "react";

function Reserva({ agregarRegistro }) {
  const [aula, setAula] = useState("");
  const [equipo, setEquipo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!aula || !equipo || !fecha || !hora) return;
    agregarRegistro({ aula, equipo, fecha, hora });
    setAula("");
    setEquipo("");
    setFecha("");
    setHora("");
  };

  return (
    <>
      <div className="reserva">
        <form className="reservation" onSubmit={handleSubmit}>
          {/* <img src="public\Logo-Cesde.svg" alt="" className="" /> */}
          <h3 className="titlesec">Reserva</h3>
          <p>Aqui puedes reservar tu espacio en nuestras aulas equipadas</p>

          <h5>No pierdas tiempo, reserva ahora</h5>

          <label for="validationTooltip04" class="form-label">
            Aula
          </label>
          <select
            class="form-select"
            id="validationTooltip04"
            required
            value={aula}
            onChange={(e) => setAula(e.target.value)}
          >
            <option selected disabled value="">
              Elegir...
            </option>
            <option>Sala 1</option>
            <option>Sala 2</option>
            <option>Sala 3</option>
            <option>Sala 4</option>
            <option>Sala 5</option>
            <option>Sala 6</option>
          </select>

          <label for="validationTooltip04" class="form-label">
            Equipo
          </label>
          <select
            class="form-select"
            id="validationTooltip04"
            required
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
          >
            <option selected disabled value="">
              Elegir...
            </option>
            <option>Puesto 1</option>
            <option>Puesto 2</option>
            <option>Puesto 3</option>
            <option>Puesto 4</option>
            <option>Puesto 5</option>
            <option>Puesto 6</option>
            <option>Puesto 7</option>
            <option>Puesto 8</option>
            <option>Puesto 9</option>
            <option>Puesto 10</option>
            <option>Puesto 11</option>
            <option>Puesto 12</option>
            <option>Puesto 13</option>
            <option>Puesto 14</option>
            <option>Puesto 15</option>
          </select>
          <label for="validationTooltip04" class="form-label">
            Fecha de reserva
          </label>
          <input
            type="date"
            placeholder=""
            className="form-control"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          ></input>
          <label for="validationTooltip04" class="form-label">
            Hora de reserva
          </label>
          <input
            type="time"
            placeholder=""
            className="form-control"
            id="fecha"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          ></input>
          <button type="submit" className="btn">
            Reservar
          </button>
          <Link id="reservar " className="btn" to="/">
            Cerrar sesión
          </Link>
        </form>
        
      </div>
    </>
  );
}

export default Reserva;
