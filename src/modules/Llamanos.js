import React from "react";

const opcion = [
  {titulo: 'Salud y Cuidado', cuerpo: 'Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas.', src: 'images/modulos/item-1.jpg'},
  {titulo: 'Psicología', cuerpo: '¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor', src: 'images/modulos/item-2.jpg'},
  {titulo: 'Dieta y Nutrición', cuerpo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!', src: 'images/modulos/item-3.jpg'},
  {titulo: 'Consultas Generales', cuerpo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!', src: 'images/modulos/item-4.jpg'}
]

const itemLlamanos = (opcion, index) => {
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

const Llamanos = () => {
  return (
    <section className="llamanos modulo">
      <div className="contenedor">
        <h3 className="sub-title">Llámanos cuando quieras <br />nuestro consejo en:</h3>
        <ul className="group">
          {opcion.map((item, index) => itemLlamanos(item, index))}
        </ul>
      </div>
    </section>
  )
}

export default Llamanos;
