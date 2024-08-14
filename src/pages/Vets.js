import React from "react";
import Staff from "../modules/Staff";

const Vets = () => {
  return(
    <>
      <section className="celeste intro modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Los queremos como si fuesen nuestros!</h2>
          <img src="images/car/001.jpg" alt="Mascotas" className="img text-center" />
        </div>
      </section>
      <Staff />
    </>
  )
}

export default Vets;
