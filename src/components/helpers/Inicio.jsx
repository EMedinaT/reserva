import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <div className="fondoPP">
        <div className="containerI">
          <img src="public\Logo-Cesde.svg" alt="" className="" />
          <h3 className="titlesec">
            TE <img src="public\reserva.svg" alt="" className="imgreserva" />
            <br />
            CONECTA
          </h3>
          ¡Bienvenidos al servicio de prestación <br />
          de PC de nuestra institución!
          <br />
          ¡Te ofrecemos nuestras aulas de computación! <br />
          estan disponibles para reservar a traves de nuestra
          <br />
          pagina web.
          <br />
          <br />
          <Link id="vamos" className="btn" to="/sesion">
            Vamos
          </Link>
        </div>
      </div>
    </>
  );
}

export default Inicio;
