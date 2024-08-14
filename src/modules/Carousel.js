import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 1,
      titulo: "Tus amigazos de siempre ¡Cuando quieras! ¡Cuando gustes!",
      parrafo: 'Saca una cita que estamos disponibles',
      src: 'images/car/001.jpg',
      alt: 'Mascotas',
      clase: 'cta cyan',
      btnMayor: 'Próxima consulta disponible hoy a las 15:00',
      btnMenor: 'Con la Dra. Geraldine Aventura',
      ruta: '/consulta'
    },
    { id: 2,
      titulo: "Tus amigazos de siempre ¡Cuando quieras! ¡Cuando gustes!",
      parrafo: 'Saca una cita que estamos disponibles',
      src: 'images/car/002.jpg',
      alt: 'Mascotas',
      clase: 'cta red',
      btnMayor: 'Asegura poner lindo a tu engreído',
      btnMenor: 'Desde 20 soles. Medicado',
      ruta: '/engrielo'
    },
    { id: 3,
      titulo: "Tus amigazos de siempre ¡Cuando quieras! ¡Cuando gustes!",
      parrafo: 'Saca una cita que estamos disponibles',
      src: 'images/car/003.png',
      alt: 'Mascotas',
      clase: 'cta blue',
      btnMayor: 'Conoce a nuestro Staff',
      btnMenor: 'Amigos de siempre',
      ruta: '/vets'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="celeste carousel">
      {items.map((item, index) => (
        <div key={item.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
          <div className="contenedor">
            <article>
              <h2>{item.titulo}</h2>
              <p>{item.parrafo}</p>
              <a href={item.ruta} className={item.clase}>
                {item.btnMayor}
                <span>{item.btnMenor}</span>
              </a>
            </article>
            <figure>
              <img className="img" src={item.src} alt={item.alt} />
            </figure>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carousel;
