import React from "react";

const Engrielo = () => {
  return(
    <>
      <section className="intro medio modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Pon lindo a tu engreído!</h2>
          <p className="text-center">Haz que se sienta comodo en nuestras manos</p>
        </div>
      </section>
      <section className="formulario celeste">
        <form className="form-layout">
          <div className="form-item">
            <label htmlFor="nombre">Nombre de su Mascota:</label>
            <input type="text" id="nombre" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="raza">Raza:</label>
            <input type="text" id="raza" />
          </div>
          <div className="form-item">
            <label htmlFor="tipo">Tamaño:</label>
            <select id="tipo">
              <option value="1">Pequeño</option>
              <option value="2">Mediano</option>
              <option value="3">Grande</option>
            </select>
          </div>
          <hr></hr>
          <div className="form-item">
            <label htmlFor="nombre_prop">Nombre del Dueño:</label>
            <input type="text" id="nombre_prop" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="fono">Fono:</label>
            <input type="number" id="fono" />
          </div>
          <div className="form-item form-half">
            <label htmlFor="mail">Email:</label>
            <input type="email" id="mail" />
          </div>
          <div className="form-item">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" />
          </div>
          <div className="form-item">
            <label htmlFor="mensaje">Detalle de Consulta:</label>
            <textarea id="mensaje"></textarea>
          </div>
          <button className="form-button">Solicitar</button>
        </form>
      </section>
    </>
  )
}

export default Engrielo;
