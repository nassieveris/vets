import React from "react";

const Consulta = () => {
  return(
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Toma una Consulta!</h2>
          <p className="text-center">¿Qué necesita tu compañero?</p>
        </div>
      </section>
      <section className="formulario rojo">
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
            <label htmlFor="tipo">Tipo de Atención:</label>
            <select id="tipo">
              <option value="1">Salud y Cuidado</option>
              <option value="2">Psicología</option>
              <option value="3">Dieta y Nutrición</option>
              <option value="4">Consultas Generales</option>
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

export default Consulta;
