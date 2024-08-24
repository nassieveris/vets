import React, { useState, useEffect } from 'react';

const Consulta = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [nombreProp, setNombreProp] = useState('');
  const [tipoMascota, setTipoMascota] = useState('');
  const [nombre, setNombre] = useState('');

  useEffect(() => {
    const form = document.getElementById('consultaForm');
    const formFields = form.querySelectorAll('input, select, textarea');

    formFields.forEach(field => {
      field.addEventListener('input', () => {
        const value = field.value.trim();
        if (field.type === 'radio') {
          const radioGroup = form.querySelectorAll(`input[name="${field.name}"]`);
          const isChecked = Array.from(radioGroup).some(radio => radio.checked);
          if (isChecked) {
            radioGroup.forEach(radio => {
              radio.dataset.state = 'valid';
              radio.classList.add('success');
              radio.classList.remove('error');
            });
          } else {
            radioGroup.forEach(radio => {
              radio.dataset.state = 'invalid';
              radio.classList.add('error');
              radio.classList.remove('success');
            });
          }
        } else {
          if (value === '') {
            field.dataset.state = 'invalid';
            field.classList.add('error');
            field.classList.remove('success');
          } else {
            field.dataset.state = 'valid';
            field.classList.add('success');
            field.classList.remove('error');
          }
        }
      });
    });

    form.addEventListener('submit', (event) => {
      let isValid = true;

      formFields.forEach(field => {
        const value = field.value.trim();
        if (field.type === 'radio') {
          const radioGroup = form.querySelectorAll(`input[name="${field.name}"]`);
          const isChecked = Array.from(radioGroup).some(radio => radio.checked);
          if (!isChecked) {
            radioGroup.forEach(radio => {
              radio.dataset.state = 'invalid';
              radio.classList.add('error');
              radio.classList.remove('success');
            });
            isValid = false;
          }
        } else {
          if (value === '' || !field.dataset.state || field.dataset.state === 'invalid') {
            field.dataset.state = 'invalid';
            field.classList.add('error');
            field.classList.remove('success');
            isValid = false;
          } else {
            field.dataset.state = 'valid';
            field.classList.add('success');
            field.classList.remove('error');
          }
        }
      });

      if (!isValid) {
        event.preventDefault();
      } else {
        setNombreProp(form.querySelector('#nombre_prop').value);
        setTipoMascota(form.querySelector('input[name="tipo_mascota"]:checked').value);
        setNombre(form.querySelector('#nombre').value);
        setShowMessage(true);
        event.preventDefault();
      }
    });

    form.addEventListener('reset', () => {
      formFields.forEach(field => {
        field.classList.remove('error', 'success');
        field.dataset.state = '';
      });
      setShowMessage(false);
    });
  }, []);

  const handleReset = () => {
    const form = document.getElementById('consultaForm');
    form.reset();
    setShowMessage(false);
  };

  return (
    <>
      <section className="intro medio rojo modulo">
        <div className="contenedor">
          <h2 className="sub-title text-center">¡Toma una Consulta!</h2>
          <p className="text-center">¿Qué necesita tu compañero?</p>
        </div>
      </section>
      <section className="formulario rojo">
      <form id="consultaForm" className={`form-layout ${showMessage ? '' : 'show'}`}>
          <div className="form-item">
            <div className='form-radio'>
              <input type="radio" name="tipo_mascota" value="perro" id="perro" required />
              <label htmlFor="perro">Perro</label>
            </div>
            <div className='form-radio'>
              <input type="radio" name="tipo_mascota" value="gato" id="gato" required />
              <label htmlFor="gato">Gato</label>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="nombre">Nombre de su Mascota:</label>
            <input type="text" id="nombre" required />
          </div>
          <div className="form-item form-half">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" required />
          </div>
          <div className="form-item form-half">
            <label htmlFor="raza">Raza:</label>
            <input type="text" id="raza" required />
          </div>
          <div className="form-item">
            <label htmlFor="tipo">Tipo de Atención:</label>
            <select id="tipo">
              <option value="">Seleccione</option>
              <option value="1">Salud y Cuidado</option>
              <option value="2">Psicología</option>
              <option value="3">Dieta y Nutrición</option>
              <option value="4">Consultas Generales</option>
            </select>
          </div>
          <hr></hr>
          <div className="form-item">
            <label htmlFor="nombre_prop">Nombre del Dueño:</label>
            <input type="text" id="nombre_prop" required />
          </div>
          <div className="form-item form-half">
            <label htmlFor="fono">Fono:</label>
            <input type="number" id="fono" required />
          </div>
          <div className="form-item form-half">
            <label htmlFor="mail">Email:</label>
            <input type="email" id="mail" required />
          </div>
          <div className="form-item">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" required />
          </div>
          <div className="form-item">
            <label htmlFor="mensaje">Detalle de Consulta:</label>
            <textarea id="mensaje" required></textarea>
          </div>
          <button className="form-button">Solicitar</button>
        </form>
        {showMessage && (
        <section className="gracias show">
          <h2>¡Muchas Gracias!</h2>
          <p>Hola {nombreProp}, ha sido reservada una cita para su {tipoMascota} engreído, {nombre}.</p>
          <button className='btn big' type="button" onClick={handleReset}>Volver al formulario</button>
        </section>
        )}
      </section>
    </>
  );
}

export default Consulta;
