import React from "react";

const Consulta = () => {
  return(
    <>
      <section className="intro">
        <div className="contenedor">
          <h2>¡Toma una Consulta!</h2>
          <p>¿Qué necesita tu compañero?</p>
          <form>
            <input type="text" placeholder="Nombre" />
            <button>Enviar</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Consulta;
