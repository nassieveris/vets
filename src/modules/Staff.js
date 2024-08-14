import React, { useState } from "react";

const opcion = [
  {
    titulo: 'Dra. Geraldine Aventura',
    cuerpo: 'Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas.',
    completo: 'Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas. Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas. Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas. Desde accidentes a enfermedades. Ten nuestra inmediata atención las 24 horas.',
    src: 'images/modulos/doc-1.jpg'
  },
  {
    titulo: 'Dr. Bruno Barrigón',
    cuerpo: '¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor',
    completo: '¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor. ¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor. ¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor. ¿No sabes porque actua tan extraño? Consulta con nosotros, y te ayudamos a entenderlo mejor.',
    src: 'images/modulos/doc-2.jpg'
  },
  {
    titulo: 'Dr. Luchito Talibia',
    cuerpo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!',
    completo:  '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía! ¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía! ¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía! ¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!',
    src: 'images/modulos/doc-3.jpg'
  },
  {
    titulo: 'Dra. Zoila del Campo',
    cuerpo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!',
    completo: '¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía! ¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía! ¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía! ¿Qué es lo mejor para tu engrído? No sabes como alimentarlo. ¡Ven y te hacemos una guía!',
    src: 'images/modulos/doc-4.jpg'
  }
]

const itemStaff = (opcion, index, openModal) => {
  return (
    <li className="group-item" key={index}>
      <img src={opcion.src} alt={opcion.titulo} />
      <article>
        <h4>{opcion.titulo}</h4>
        <p>{opcion.cuerpo}</p>
        <button className="btn" onClick={() => openModal(opcion)}>Conocer más</button>
      </article>
    </li>
  )
}

const Staff = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const openModal = (staff) => {
    setSelectedStaff(staff);
    setModalVisible(true);
  }

  const closeModal = () => {
    setSelectedStaff(null);
    setModalVisible(false);
  }

  return (
    <section className="staff modulo">
      <div className="contenedor">
        <h3 className="sub-title text-center">Nuestro Staff</h3>
        <ul className="group">
          {opcion.map((item, index) => itemStaff(item, index, openModal))}
        </ul>
      </div>
      {modalVisible && selectedStaff && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h4>{selectedStaff.titulo}</h4>
            <article>
              <figure><img className="img" src={selectedStaff.src} alt={selectedStaff.titulo} /></figure>
              <p>{selectedStaff.completo}</p>
            </article>
          </div>
        </div>
      )}
    </section>
  )
}

export default Staff;
