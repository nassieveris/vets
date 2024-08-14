import React from "react";
import Llamanos from "../modules/Llamanos";

const Nosotros = () => {
  return(
    <>
      <section className="celeste intro modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¿Quiénes somos?</h2>
          <p className="text-center">Protejer a nuestros amigos peludos brindándoles soluciones de
          atención médica simples, flexibles y transparentes  para los dueños de mascotas de hoy.</p>
        </div>
      </section>
      <section className="cyan nosotros modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¿Porqué elegirnos?</h2>
          <article className="group">
            <div className="group-text">
              <p>Llevar a tu amada mascota a la veterinaria puede ser una gran dificultad para muchas personas. </p>
              <p>Requiere mucho tiempo del día, suele ser muy estresante para el animal y, por supuesto, ¡potencialmente bastante costoso! </p>
              <p>Esto puede llevar a un autodiagnóstico con consejos no verificados de Google o a una espera peligrosa mientras una condición empeora.
              La antigua decisión de: “¿Tengo que llevar a mi mascota al veterinario?” </p>
              <p>¡A menudo puede ser difícil de hacer! Es por eso que creamos Miau Guau Vet, para brindarles a los dueños de mascotas
              asesoramiento de primer nivel a través de un acceso instantáneo y asequible a veterinarios altamente calificados</p>
            </div>
            <figure className="group-text">
              <img className="img" src="images/nosotros.jpg" alt="Nosotros" />
            </figure>
          </article>
        </div>
      </section>
      <Llamanos />
    </>
  )
}

export default Nosotros;
