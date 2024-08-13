import React from "react";
import Llamanos from "../modules/Llamanos";

const Nosotros = () => {
  return(
    <>
      <section className="intro">
        <div className="contenedor">
          <h2>¿Quiénes somos?</h2>
          <p>Somos una empresa con más de 10 años de experiencia en el cuidado de mascotas.
          Nuestro objetivo es brindar un servicio de calidad y confianza, para que puedas disfrutar de tu mascota sin preocupaciones.</p>
        </div>
      </section>
      <section className="nosotros">
        <div className="contenedor">
          <h2>¿Porqué elegirnos?</h2>
          <p>Somos una empresa con más de 10 años de experiencia en el cuidado de mascotas.
          Nuestro objetivo es brindar un servicio de calidad y confianza, para que puedas disfrutar de tu mascota sin preocupaciones.</p>
        </div>
      </section>
      <Llamanos />
    </>
  )
}

export default Nosotros;
