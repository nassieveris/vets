import React from "react";

const opcion = [
  {titulo: 'Dra. Geraldine Aventura', cuerpo: 'Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas.', src: 'images/modulos/doc-1.jpg'},
  {titulo: 'Dr. Bruno Barrigón', cuerpo: '¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor', src: 'images/modulos/doc-2.jpg'},
  {titulo: 'Dr. Luchito Talibia', cuerpo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!', src: 'images/modulos/doc-3.jpg'},
  {titulo: 'Dra. Zoila del Campo', cuerpo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!', src: 'images/modulos/doc-4.jpg'}
]

const itemStaff = (opcion, index) => {
  return (
    <li className="group-item" key={index}>
      <img src={opcion.src} alt={opcion.titulo} />
      <article>
        <h4>{opcion.titulo}</h4>
        <p>{opcion.cuerpo}</p>
      </article>
    </li>
  )
}

const Staff = () => {
  return (
    <section className="staff modulo">
      <div className="contenedor">
        <h3 className="sub-title text-center">Nuestro Staff</h3>
        <ul className="group">
          {opcion.map((item, index) => itemStaff(item, index))}
        </ul>
      </div>
    </section>
  )
}

export default Staff;
